/* Supabase Auth + owner-only profiles. No client-side administrative authority. */
(() => {
  "use strict";
  const config = window.palpinetAccount || {};
  const localPreview = window.palpinetOffline === true || location.protocol === "file:" || ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
  const url = String(config.url || "").replace(/\/$/, "");
  const key = String(config.publishableKey || "");
  let validKey = key.startsWith("sb_publishable_");
  try { validKey ||= JSON.parse(atob(key.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"))).role === "anon"; } catch {}
  const enabled = Boolean(config.enabled && /^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url) && validKey);
  const storageKey = "palpinet.auth.session:" + url;
  let session = null, current = null, revision = 0, refreshing = null, recovering = false;
  const notice = "As contas online ainda não foram ativadas. Você pode gerar e copiar seus números.";
  const emit = () => window.dispatchEvent(new Event("palpinet:accountchange"));
  function saveSession(value) {
    session = value;
    try { if(value) sessionStorage.setItem(storageKey,JSON.stringify(value)); else sessionStorage.removeItem(storageKey); } catch {}
  }
  function setToken(payload) {
    saveSession({access_token:payload.access_token,refresh_token:payload.refresh_token,expires_at:Date.now()+Number(payload.expires_in || 3600)*1000});
  }
  async function request(path, {method="GET",body,authenticated=true,token,retry=true,prefer}={}) {
    if (!enabled) throw new Error(notice);
    if(authenticated && !token && session && session.expires_at<Date.now()+30000) await refreshToken();
    let response; try { response=await fetch(url+path,{method,headers:{apikey:key,...((token||authenticated&&session?.access_token)?{Authorization:"Bearer "+(token||session.access_token)}:{}),...(body!==undefined?{"Content-Type":"application/json"}:{}),...(prefer?{Prefer:prefer}:{})},...(body!==undefined?{body:JSON.stringify(body)}:{})}); } catch { throw new Error("Não foi possível conectar à sua conta. Verifique a conexão e tente novamente."); }
    let payload=null;try { payload=await response.json(); } catch {}
    if(response.status===401 && authenticated && retry && session?.refresh_token){await refreshToken();return request(path,{method,body,authenticated,retry:false,prefer});}
    if(!response.ok) {
      const code=payload?.error_code || payload?.code;
      if(code==="invalid_credentials")throw new Error("E-mail ou senha incorretos.");
      if(code==="email_not_confirmed")throw new Error("Confirme seu e-mail antes de entrar.");
      if(response.status===429)throw new Error("Muitas tentativas. Aguarde um pouco e tente novamente.");
      throw new Error("Não foi possível concluir a operação na sua conta. Tente novamente.");
    }
    return payload;
  }
  async function refreshToken() {
    if(refreshing)return refreshing;
    refreshing=(async()=>{
      if(!session?.refresh_token)throw new Error("Entre novamente para continuar.");
      try {
        const payload=await request("/auth/v1/token?grant_type=refresh_token",{method:"POST",body:{refresh_token:session.refresh_token},authenticated:false});
        setToken(payload);
      }catch(error){saveSession(null);current=null;emit();throw error;}
    })().finally(()=>{refreshing=null;});
    return refreshing;
  }
  function profile(user, data={}) {
    // Identity and privileges always come from the verified session, never JSON profile data.
    return {id:user.id,email:user.email,name:data.name||user.user_metadata?.name||"Usuário Palpinet",birth_date:data.birth_date||"",sign:data.sign||"",city:data.city||"",history:Array.isArray(data.history)?data.history:[],favorites:Array.isArray(data.favorites)?data.favorites:[],preferences:data.preferences||{},createdAt:user.created_at,role:"user",status:"active",plan:"Gratis"};
  }
  async function loadProfile(user) {
    const filter="?user_id=eq."+encodeURIComponent(user.id)+"&select=data,revision";
    let rows=await request("/rest/v1/palpinet_profiles"+filter);
    if(!rows?.length){
      await request("/rest/v1/palpinet_profiles?on_conflict=user_id",{method:"POST",body:{user_id:user.id,data:{name:user.user_metadata?.name||"Usuário Palpinet",birth_date:user.user_metadata?.birth_date||"",sign:user.user_metadata?.sign||"",city:user.user_metadata?.city||""}},prefer:"resolution=ignore-duplicates"});
      rows=await request("/rest/v1/palpinet_profiles"+filter);
    }
    if(!rows?.length)throw new Error("Seu histórico ainda não pôde ser carregado. Tente novamente.");
    revision=rows[0].revision;current=profile(user,rows[0].data);emit();return current;
  }
  async function establish(payload) {
    setToken(payload);
    try {const user=await request("/auth/v1/user");await loadProfile(user);return current;}
    catch(error){current=null;saveSession(null);emit();throw error;}
  }
  async function init() {
    const callback=new URLSearchParams(window.palpinetAuthCallback || location.hash.slice(1));
    delete window.palpinetAuthCallback;
    if(!enabled)return;
    if(callback.has("access_token")){
      recovering=callback.get("type")==="recovery";
      const token=callback.get("access_token"),refresh=callback.get("refresh_token");
      // Remove credentials from the address bar before rendering routes or tracking pages.
      history.replaceState(null,"",location.pathname+location.search);
      await establish({access_token:token,refresh_token:refresh,expires_in:callback.get("expires_in")});return;
    }
    try {session=JSON.parse(sessionStorage.getItem(storageKey)||"null");}catch{session=null;}
    if(session){try{const user=await request("/auth/v1/user");await loadProfile(user);}catch{saveSession(null);current=null;emit();}}
  }
  const api = {
    enabled, localPreview, blocked:!enabled&&(!localPreview||config.enabled===true),
    get currentUser(){return current;},get recovering(){return recovering;},
    init,
    async signIn(email,password){
      const payload=await request("/auth/v1/token?grant_type=password",{method:"POST",body:{email,password},authenticated:false});
      return establish(payload);
    },
    async signUp(name,email,password,extra={}){
      const payload=await request("/auth/v1/signup",{method:"POST",body:{email,password,data:{name,...extra}},authenticated:false});
      if(payload?.access_token)return establish(payload);
      return null; // Email confirmation is required: do not invent a logged-in session.
    },
    async signOut(){try{if(session)await request("/auth/v1/logout?scope=local",{method:"POST",body:{}});}finally{saveSession(null);current=null;recovering=false;emit();}},
    async refresh(){if(!current)return;const user=await request("/auth/v1/user");return loadProfile(user);},
    async update(updater){
      if(!current)throw new Error("Entre para salvar na sua conta.");
      const next=updater(structuredClone(current));
      const data={name:next.name,birth_date:next.birth_date,sign:next.sign,city:next.city,history:next.history,favorites:next.favorites,preferences:next.preferences};
      const rows=await request("/rest/v1/palpinet_profiles?user_id=eq."+encodeURIComponent(current.id)+"&revision=eq."+revision,{method:"PATCH",body:{data,revision:revision+1,updated_at:new Date().toISOString()},prefer:"return=representation"});
      if(!rows?.length){await api.refresh();throw new Error("Seu histórico mudou em outro dispositivo. Atualizamos os dados; tente novamente.");}
      revision=rows[0].revision;current={...current,...data,role:"user"};emit();return current;
    },
    async updateEmail(email){await request("/auth/v1/user",{method:"PUT",body:{email}});},
    async recover(email){await request("/auth/v1/recover?redirect_to="+encodeURIComponent(location.origin+"/conta"),{method:"POST",body:{email},authenticated:false});},
    async resetPassword(password){if(!recovering||!current)throw new Error("Abra o link de recuperação recebido por e-mail.");await request("/auth/v1/user",{method:"PUT",body:{password}});recovering=false;},
    async deleteAccount(){await request("/rest/v1/rpc/palpinet_delete_account",{method:"POST",body:{}});saveSession(null);current=null;emit();}
  };
  window.PalpinetAccounts=api;
})();

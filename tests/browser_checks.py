"""Browser regressions and provider contract tests. Remote Supabase is mocked, never claimed live."""
import json, os, time
from pathlib import Path
from urllib.parse import urlparse, parse_qs
from playwright.sync_api import sync_playwright, expect
BASE=os.environ.get('PALPINET_TEST_URL','http://127.0.0.1:4185')
ROOT=Path(__file__).resolve().parents[1]

class Provider:
    def __init__(self):
        self.users={};self.rows={};self.tokens={};self.conflict=False;self.fail_write=False;self.confirm_signup=False;self.requests=[]
    def handle(self,route):
        request=route.request;parsed=urlparse(request.url);path=parsed.path;query=parse_qs(parsed.query)
        body=request.post_data_json if request.post_data else {};token=request.headers.get('authorization','').removeprefix('Bearer ')
        email=self.tokens.get(token);self.requests.append((path,request.method))
        def reply(data,status=200):route.fulfill(status=status,content_type='application/json',body=json.dumps(data),headers={'Access-Control-Allow-Origin':'*'})
        if path=='/auth/v1/signup':
            email=body['email'];uid=f'00000000-0000-0000-0000-{len(self.users)+1:012d}'
            self.users[email]={'id':uid,'email':email,'user_metadata':body['data'],'created_at':'2026-10-26T10:00:00Z'}
            if self.confirm_signup:return reply({'user':self.users[email]})
            access='test-access-'+email;self.tokens[access]=email
            return reply({'access_token':access,'refresh_token':'test-refresh-'+email,'expires_in':3600})
        if path=='/auth/v1/token':
            if query.get('grant_type')==['refresh_token']:email=body['refresh_token'].removeprefix('test-refresh-')
            else:email=body.get('email')
            if email not in self.users:return reply({'error_code':'invalid_credentials'},400)
            access='test-access-'+email;self.tokens[access]=email
            return reply({'access_token':access,'refresh_token':'test-refresh-'+email,'expires_in':3600})
        if path=='/auth/v1/recover':return reply({})
        if path=='/auth/v1/logout':return reply({})
        if not email:return reply({'message':'unauthorized'},401)
        user=self.users[email];uid=user['id']
        if path=='/auth/v1/user':return reply(user)
        if path=='/rest/v1/rpc/palpinet_delete_account':
            self.rows.pop(uid,None);self.users.pop(email,None);return reply(None)
        if path=='/rest/v1/palpinet_profiles':
            if request.method=='GET':return reply([self.rows[uid]] if uid in self.rows else [])
            if request.method=='POST':
                if body['user_id']!=uid:return reply({'message':'RLS'},403)
                self.rows.setdefault(uid,{'data':body['data'],'revision':0});return reply(None)
            if request.method=='PATCH':
                if self.fail_write:return reply({'message':'network fail'},500)
                expected=int(query['revision'][0].removeprefix('eq.'))
                if self.conflict:self.conflict=False;self.rows[uid]['revision']+=1
                if expected!=self.rows[uid]['revision']:return reply([])
                self.rows[uid]={'data':body['data'],'revision':body['revision']};return reply([self.rows[uid]])
        return reply({'message':'unknown route'},404)

def provider_context(browser,provider,**kwargs):
    context=browser.new_context(**kwargs)
    context.route('**/account-config.js',lambda route:route.fulfill(content_type='application/javascript',body='window.palpinetAccount={enabled:true,url:"https://palpinet-test.supabase.co",publishableKey:"sb_publishable_contract_test"};'))
    context.route('https://palpinet-test.supabase.co/**',provider.handle)
    return context

def signup(page,email):
    page.click('#openLogin');page.click('[data-auth-mode="signup"]')
    page.fill('#signupName','Pessoa Teste');page.fill('#signupEmail',email);page.fill('#signupPassword','test-password-123')
    page.click('#signupForm button[type="submit"]')

def generate(page):
    page.click('[data-inspiration="aleatorio"]');page.click('#generate')
    page.wait_for_function('!document.querySelector("#generate").disabled')
    expect(page.locator('#result .number-ball')).to_have_count(6)

with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=os.environ.get('PALPINET_CHROMIUM','/usr/bin/chromium'),headless=True,args=['--no-sandbox'])
    local=browser.new_context(permissions=['clipboard-read','clipboard-write']);page=local.new_page();errors=[]
    page.on('pageerror',lambda error:errors.append(str(error)))
    page.goto(BASE)
    assert not page.locator('#generatorFields').is_visible()
    page.click('[data-inspiration="horoscopo"]');expect(page.locator('#signSelect')).to_be_visible()
    assert not page.locator('#userInput').is_visible()
    page.click('[data-inspiration="nome-da-sorte"]');expect(page.locator('#numericChoices')).to_be_visible()
    page.check('[name="numericSource"][value="data-especial"]');assert page.get_attribute('#userInput','type')=='date'
    page.click('[data-inspiration="aleatorio"]');assert not page.locator('#complementaryField').is_visible()
    page.click('#customizeToggle');page.fill('#userInput','minha inspiração')
    # All original methods remain available, in every modality.
    methods=['aleatorio','sonho','horoscopo','matematica','data-especial','nome-da-sorte']
    games={'mega-sena':(6,1,60),'lotofacil':(15,1,25),'quina':(5,1,80),'lotomania':(50,0,99),'dupla-sena':(6,1,50),'timemania':(10,1,80),'dia-de-sorte':(7,1,31)}
    count=0
    for game,(quantity,lo,hi) in games.items():
        page.select_option('#game',game)
        for method in methods:
            page.locator('#otherInspirations').evaluate('(e)=>e.open=true')
            page.select_option('#method',method)
            if method=='sonho':page.fill('#userInput','chuva e viagem')
            elif method=='nome-da-sorte':page.fill('#userInput','Ana Paula')
            elif method=='data-especial':page.fill('#userInput','1990-05-12')
            elif method=='horoscopo':page.select_option('#signSelect','libra')
            page.click('#generate');page.wait_for_function('!document.querySelector("#generate").disabled')
            nums=[int(text) for text in page.locator('#result .number-ball').all_text_contents()]
            assert len(nums)==quantity and len(set(nums))==quantity and all(lo<=n<=hi for n in nums),(game,method,nums)
            count+=1
    page.click('[data-action="copy"]');assert page.evaluate('navigator.clipboard.readText()')
    assert not page.locator('[data-action="share"]').is_visible()
    page.locator('.result-more summary').click();expect(page.locator('[data-action="share"]')).to_be_visible()
    page.locator('.result-more summary').focus();page.keyboard.press('Escape');assert not page.locator('[data-action="share"]').is_visible()
    page.click('[data-action="save"]');expect(page.locator('#authModal')).to_be_visible()
    page.click('[data-auth-mode="signup"]');page.fill('#signupName','Pessoa Local');page.fill('#signupEmail','local@example.com');page.fill('#signupPassword','test-password-123');page.click('#signupForm button[type="submit"]')
    expect(page.locator('#authModal')).to_be_hidden()
    stored=page.evaluate('JSON.parse(localStorage.getItem("palpinet.preview.users"))')
    assert all('password' not in user and user.get('passwordHash') for user in stored)
    page.click('[data-action="save"]');page.click('#accountLink');page.click('[data-client-view="guesses"]')
    page.locator('[data-client-action="favorite"]').first.click();page.click('[data-client-view="favorites"]');expect(page.locator('.client-guess-card').first).to_be_visible()
    for width in [320,390,768,1024,1440]:
        page.set_viewport_size({'width':width,'height':900})
        for path in ['/','/gerador','/jogos','/metodos','/blog','/conta']:
            page.goto(BASE+path);assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(width,path)
    # Remote Auth contract, email confirmation, session restoration and synchronization across independent clients.
    provider=Provider();first=provider_context(browser,provider);a=first.new_page();a.on('pageerror',lambda e:errors.append(str(e)));a.goto(BASE)
    signup(a,'account@example.com');expect(a.locator('#authModal')).to_be_hidden()
    generate(a)
    uid=provider.users['account@example.com']['id']
    a.wait_for_function('window.PalpinetAccounts.currentUser?.history?.length===1')
    assert len(provider.rows[uid]['data']['history'])==1
    assert all('password' not in name.lower() for name in provider.rows[uid]['data'])
    assert not a.locator('#adminLink').is_visible()
    # A new browser context has no copied localStorage/sessionStorage: provider login restores server history.
    second=provider_context(browser,provider);c=second.new_page();c.goto(BASE);c.click('#openLogin');c.fill('#loginEmail','account@example.com');c.fill('#loginPassword','test-password-123');c.click('#loginForm button[type="submit"]');expect(c.locator('#authModal')).to_be_hidden()
    c.click('#accountLink');expect(c.locator('#clientDashboard')).to_be_visible();c.click('[data-client-view="guesses"]');expect(c.locator('.client-guess-card')).to_have_count(1)
    c.locator('[data-client-action="favorite"]').first.click();c.wait_for_function('window.PalpinetAccounts.currentUser?.favorites?.length===1')
    # Concurrent change: reject stale whole-profile writes, reload data and show the retry message.
    provider.conflict=True;c.locator('[data-client-action="favorite"]').first.click()
    expect(c.locator('#accountCloudStatus')).to_contain_text('outro dispositivo')
    assert len(provider.rows[uid]['data']['favorites'])==1
    # A failed persistence request does not modify cached or remote favorite state.
    provider.fail_write=True;c.locator('[data-client-action="favorite"]').first.click()
    expect(c.locator('#accountCloudStatus')).to_contain_text('Não foi possível')
    assert len(provider.rows[uid]['data']['favorites'])==1;provider.fail_write=False
    # Confirmed email is required: no user chip or session appears just from a signup response.
    provider.confirm_signup=True;third=provider_context(browser,provider);d=third.new_page();d.goto(BASE);signup(d,'confirmation@example.com')
    expect(d.locator('#signupMessage')).to_contain_text('conf')
    assert not d.locator('#accountLink').is_visible() and d.evaluate('window.PalpinetAccounts.currentUser') is None
    # Unconfigured public hosting fails closed rather than falling back to local account authentication.
    public=browser.new_context();pub=public.new_page()
    pub.route('https://public.palpinet.test/**',lambda route:route.fulfill(content_type='text/html' if route.request.url.endswith('/') else 'application/javascript' if '.js' in route.request.url else 'text/css',body=(ROOT/('index.html' if route.request.url.endswith('/') else urlparse(route.request.url).path.lstrip('/'))).read_bytes()) if (ROOT/('index.html' if route.request.url.endswith('/') else urlparse(route.request.url).path.lstrip('/'))).is_file() else route.abort())
    pub.goto('https://public.palpinet.test/');pub.click('#openLogin');pub.fill('#loginEmail','local@example.com');pub.fill('#loginPassword','test-password-123');pub.click('#loginForm button[type="submit"]')
    expect(pub.locator('#loginMessage')).to_contain_text('não foram ativadas');assert pub.evaluate('window.PalpinetAccounts.currentUser') is None
    # A client-provided role cannot grant administrative authority.
    provider.rows[uid]['data']['role']='admin'
    c.click('#refreshCloudAccount');c.wait_for_timeout(100)
    assert not c.locator('#adminLink').is_visible()
    # A reload validates the session and refreshes expired tokens before reading a profile.
    token_calls=sum(path=='/auth/v1/token' for path,method in provider.requests)
    c.evaluate("() => {const k=Object.keys(sessionStorage).find(k=>k.startsWith('palpinet.auth.session:'));const v=JSON.parse(sessionStorage.getItem(k));v.expires_at=0;sessionStorage.setItem(k,JSON.stringify(v));}")
    c.reload();expect(c.locator('#clientDashboard')).to_be_visible()
    assert sum(path=='/auth/v1/token' for path,method in provider.requests)>token_calls
    # Password reset is authorized by the provider recovery session, not knowledge of an email.
    recovery=provider_context(browser,provider);rp=recovery.new_page()
    rp.goto(BASE+'/conta#access_token=test-access-account@example.com&refresh_token=test-refresh-account@example.com&type=recovery&expires_in=3600')
    expect(rp.locator('#recoverReset')).to_be_visible()
    assert 'access_token' not in rp.url and 'refresh_token' not in rp.url
    rp.fill('#recoverPassword','new-password-456');rp.fill('#recoverPasswordConfirm','new-password-456');rp.click('#recoverSubmit')
    expect(rp.locator('#loginMessage')).to_contain_text('atualizada')
    assert ('/auth/v1/user','PUT') in provider.requests
    # The delete action uses the owner-only server RPC and does not delete another account.
    c.click('[data-client-view="settings"]')
    c.on('dialog',lambda dialog:dialog.accept())
    c.locator('[data-client-action="delete-account"]').click()
    expect(c.locator('#clientGuest')).to_be_visible()
    assert 'account@example.com' not in provider.users and 'confirmation@example.com' in provider.users
    assert not errors,errors
    print(f'PASS: {count} game/method generations; 30 responsive page checks; inspiration flow, clipboard, disclosures, local hashing; cloud contract, cross-device history, concurrency, failure handling, confirmation and public fail-closed behavior. Not a live Supabase validation.')
    browser.close()

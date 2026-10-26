/* A small, self-contained WebGL scene. No remote models, scripts or textures. */
(() => {
  "use strict";
  const canvas = document.querySelector("#luckCanvas");
  const stage = document.querySelector("#luckUniverse");
  const control = document.querySelector("#motionToggle");
  if (!canvas || !stage || !control) return;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let gl;
  try { gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" }); } catch { return; }
  if (!gl) return; // The CSS illustration stays visible when WebGL is unavailable.
  const vertex = `attribute vec2 aPosition; void main(){gl_Position=vec4(aPosition,0.,1.);}`;
  const fragment = `
    precision mediump float;
    uniform vec2 uResolution;
    uniform vec2 uPointer;
    uniform float uTime;
    uniform float uScroll;
    uniform sampler2D uNumbers;
    float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    vec3 center(float i){
      vec3 p=vec3(0.,.05,1.0);
      if(i>0.5)p=vec3(-2.15,.95,-.25);
      if(i>1.5)p=vec3(2.15,.9,-.65);
      if(i>2.5)p=vec3(1.55,-1.45,-.15);
      if(i>3.5)p=vec3(-1.75,-1.3,-.75);
      if(i>4.5)p=vec3(.1,2.,-1.45);
      p.y+=sin(uTime*.55+i*1.8)*.11;
      float angle=uPointer.x*.17+uScroll*.12;
      p.xz=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*p.xz;
      p.y+=uPointer.y*.13;
      return p;
    }
    vec3 palette(float i){
      if(i<.5)return vec3(.48,.30,.73);
      if(i<1.5)return vec3(.79,.63,.36);
      if(i<2.5)return vec3(.78,.74,.88);
      if(i<3.5)return vec3(.59,.43,.78);
      if(i<4.5)return vec3(.31,.41,.66);
      return vec3(.83,.74,.57);
    }
    void main(){
      vec2 uv=(2.*gl_FragCoord.xy-uResolution.xy)/uResolution.y;
      vec3 ro=vec3(uPointer.x*.12,uPointer.y*.08,7.3);
      vec3 rd=normalize(vec3(uv, -2.8));
      vec3 bg=vec3(.051,.078,.149);
      float halo=exp(-dot(uv,uv)*.65);
      bg+=vec3(.052,.020,.083)*halo;
      vec2 cell=floor((uv+vec2(uTime*.0007,0.))*45.);
      vec2 point=fract((uv+vec2(uTime*.0007,0.))*45.)-.5;
      float star=step(.985,noise(cell))*smoothstep(.065,0.,length(point));
      bg+=star*vec3(.21,.18,.28);
      float orbit=abs(length(uv*vec2(.9,1.35))-1.18);
      bg+=vec3(.22,.15,.34)*smoothstep(.008,0.,orbit)*.55;
      float nearest=100.; float chosen=-1.; float coverage=1.; vec3 sphere=vec3(0.); float radius=1.;
      for(int j=0;j<6;j++){
        float i=float(j); vec3 c=center(i); float r=i<.5?1.02:.65;
        vec3 oc=ro-c; float b=dot(oc,rd); float d=b*b-dot(oc,oc)+r*r;
        if(d>0.){float t=-b-sqrt(d);if(t>0.&&t<nearest){nearest=t;chosen=i;sphere=c;radius=r;coverage=smoothstep(0.,.025,d);}}
      }
      vec3 color=bg;
      if(chosen>=0.){
        vec3 pos=ro+rd*nearest; vec3 n=normalize(pos-sphere); vec3 view=-rd;
        vec3 light=normalize(vec3(-.65,1.,1.8));
        vec3 base=palette(chosen);
        float disk=1.-smoothstep(.56,.59,length(n.xy));
        disk*=step(.5,n.z);
        base=mix(base,vec3(.95,.93,.99),disk);
        vec2 textUV=n.xy/.94+.5;
        textUV.x=(clamp(textUV.x,0.,1.)+chosen)/6.;
        float ink=texture2D(uNumbers,textUV).a;
        base=mix(base,vec3(.13,.09,.23),ink*disk);
        float diffuse=max(dot(n,light),0.);
        float spec=pow(max(dot(n,normalize(light+view)),0.),65.);
        float fresnel=pow(1.-max(dot(n,view),0.),3.);
        color=base*(.29+.78*diffuse)+vec3(.92,.85,1.)*spec*.63;
        color+=vec3(.18,.12,.32)*fresnel;
        color=mix(color,vec3(.77,.69,.93),pow(max(n.y,0.),9.)*.13);
      }
      color=mix(bg,color,coverage);
      gl_FragColor=vec4(color,1.);
    }`;
  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); throw new Error("Scene shader unavailable"); }
    return shader;
  }
  let program;
  try {
    program = gl.createProgram();
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
    gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    gl.deleteShader(vs); gl.deleteShader(fs);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Scene program unavailable");
  } catch { return; }
  gl.useProgram(program);
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,3,-1,-1,3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program,"aPosition");
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
  const atlas = document.createElement("canvas"); atlas.width=768; atlas.height=128;
  const ctx=atlas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle="#111"; ctx.font="600 55px system-ui, sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle";
  ["07","14","23","36","42","58"].forEach((number,i)=>ctx.fillText(number,128*i+64,65));
  const texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,atlas);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  const uniforms={};
  ["uResolution","uPointer","uTime","uScroll","uNumbers"].forEach(key=>uniforms[key]=gl.getUniformLocation(program,key));
  gl.uniform1i(uniforms.uNumbers,0);
  let paused=reducedMotion.matches, visible=false, lost=false, frame=0, elapsed=0, previous=0;
  let pointer={x:0,y:0}, target={x:0,y:0};
  function resize(){
    const rect=stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const scale=Math.min(devicePixelRatio||1,innerWidth<761?1:1.5);
    const width=Math.round(rect.width*scale), height=Math.round(rect.height*scale);
    if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;gl.viewport(0,0,width,height);}
  }
  function draw(){
    if(lost) return;
    resize();
    pointer.x+=(target.x-pointer.x)*.05; pointer.y+=(target.y-pointer.y)*.05;
    gl.uniform2f(uniforms.uResolution,canvas.width,canvas.height);
    gl.uniform2f(uniforms.uPointer,pointer.x,pointer.y);
    gl.uniform1f(uniforms.uTime,elapsed);
    gl.uniform1f(uniforms.uScroll,reducedMotion.matches?0:Math.min(scrollY/700,1));
    gl.drawArrays(gl.TRIANGLES,0,3);
    stage.classList.add("is-rendered");
  }
  function animate(now){
    frame=0;
    if(paused||!visible||document.hidden||lost) return;
    if(!previous||now-previous>=32){elapsed+=previous?Math.min((now-previous)/1000,.08):0;previous=now;draw();}
    frame=requestAnimationFrame(animate);
  }
  function sync(){
    cancelAnimationFrame(frame);frame=0;previous=0;
    control.textContent=paused?"Ativar movimento":"Pausar movimento";
    control.setAttribute("aria-pressed",String(paused));
    if(visible&&!document.hidden&&!lost){draw();if(!paused)frame=requestAnimationFrame(animate);}
  }
  control.hidden=false;
  control.addEventListener("click",()=>{paused=!paused;sync();});
  stage.addEventListener("pointermove",event=>{
    if(paused||reducedMotion.matches||event.pointerType==="touch")return;
    const rect=stage.getBoundingClientRect();
    target.x=((event.clientX-rect.left)/rect.width-.5)*2;
    target.y=-((event.clientY-rect.top)/rect.height-.5)*2;
  });
  stage.addEventListener("pointerleave",()=>{target={x:0,y:0};});
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.01});
  observer.observe(stage);
  new ResizeObserver(()=>{if(visible&&!lost)draw();}).observe(stage);
  document.addEventListener("visibilitychange",sync);
  reducedMotion.addEventListener("change",()=>{paused=reducedMotion.matches;target={x:0,y:0};pointer={x:0,y:0};sync();});
  canvas.addEventListener("webglcontextlost",event=>{
    event.preventDefault();lost=true;cancelAnimationFrame(frame);stage.classList.remove("is-rendered");control.hidden=true;
  });
  canvas.addEventListener("webglcontextrestored",()=>{
    // Keep the static illustration until the next load, instead of using invalid GPU resources.
    lost=true;stage.classList.remove("is-rendered");control.hidden=true;
  });
})();

from pathlib import Path
import re,base64,mimetypes
root=Path(__file__).resolve().parent
html=(root/'index.html').read_text()
css='\n'.join((root/name).read_text() for name in ['styles.css','refinements.css','experience-3d.css'])
js=(root/'app.js').read_text()
# Route and storage adapters apply only to this portable review artifact.
js=js.replace('window.location.pathname','palpinetOfflinePath()').replace('window.history.pushState(','offlinePushState(').replace('localStorage','offlineStorage').replace('fetch(','offlineFetch(')
bootstrap=r'''
function palpinetOfflinePath() {
  return location.hash.startsWith('#/') ? location.hash.slice(1).split('#')[0].split('?')[0] || '/' : '/';
}
function offlineHash(path) {
  if (path === '/#gerador' || path === '/#cliente') return path.slice(1);
  return '#' + path;
}
function offlinePushState(state, title, path) { history.pushState(state, title, offlineHash(path)); }
const offlineMemory = new Map();
const offlineStorage = {
  getItem(key) { try { return localStorage.getItem(key) ?? offlineMemory.get(key) ?? null; } catch { return offlineMemory.get(key) ?? null; } },
  setItem(key,value) { offlineMemory.set(key,String(value)); try { localStorage.setItem(key,String(value)); } catch {} },
  removeItem(key) { offlineMemory.delete(key); try { localStorage.removeItem(key); } catch {} }
};
function offlineFetch() { return Promise.reject(new Error('Esta prévia está em modo offline.')); }
'''
router=r'''
function offlineRefresh() {
  renderBlog(); renderAdmin(); renderDashboard(); updatePublicRoute();
  const fragment = location.hash.startsWith('#/') ? location.hash.slice(2).split('#')[1] : location.hash.slice(1);
  requestAnimationFrame(() => {
    const target = fragment && document.getElementById(fragment);
    if (target) target.scrollIntoView({block:'start'}); else window.scrollTo(0,0);
  });
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link || event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const href=link.getAttribute('href');
  if (!href || (!href.startsWith('/') && !href.startsWith('#'))) return;
  event.preventDefault();
  let target = href;
  if (href.startsWith('#')) target = palpinetOfflinePath() + href;
  const hash = offlineHash(target);
  if (location.hash === hash) offlineRefresh(); else location.hash=hash;
});
window.addEventListener('hashchange',offlineRefresh);
window.addEventListener('popstate',offlineRefresh);
offlineRefresh();
'''
html=re.sub(r'\s*<link rel="(?:icon|preload|canonical)"[^>]*>','',html)
html=re.sub(r'\s*<link rel="stylesheet"[^>]*>','',html)
html=html.replace('</head>','<style>'+css+'</style></head>')
script=bootstrap+'\n'+js+'\n'+(root/'scene-3d.js').read_text()+'\n'+router
script=script.replace('</script','<\\/script')
html=re.sub(r'<script src="/scene-3d.js[^>]*></script>','',html)
html=re.sub(r'<script src="/app.js[^>]*></script>',lambda _: '<script>'+script+'</script>',html)
html=html.replace('</header>\n\n    <main>','</header>\n\n    <main>')
# Embed every local image used by HTML, CSS or JavaScript.
for asset in sorted(root.rglob('*')):
 if not asset.is_file() or asset.suffix not in ['.png','.svg','.jpg','.webp']: continue
 relative='/'+str(asset.relative_to(root))
 if relative not in html:continue
 mime=mimetypes.guess_type(str(asset))[0] or 'application/octet-stream'
 data='data:'+mime+';base64,'+base64.b64encode(asset.read_bytes()).decode()
 html=html.replace(relative,data)
html=html.replace('<title>Palpinet |','<title>Palpinet 3D Offline |')
html=html.replace('<div class="quick-head">','<p style="margin:0 0 14px;color:#6040a3;font-size:.8rem">Prévia offline · geração local, sem interpretação por IA</p><div class="quick-head">')
out=root/'offline/Palpinet-offline.html';out.parent.mkdir(exist_ok=True);out.write_text(html)
print(out, out.stat().st_size,'bytes')

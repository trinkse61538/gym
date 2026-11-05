const CACHE='gymos-static-v3';
const ASSETS=['./','./index.html','./styles.css','./app.js','./data.js','./catalog.js','./planner.mjs','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);if(e.request.method!=='GET'||url.origin!==self.location.origin)return;
  // Network-first for navigation and code so a deployed update can take effect.
  if(e.request.mode==='navigate'||/\.(js|css)$/.test(url.pathname)){
    e.respondWith(fetch(e.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res;}).catch(()=>caches.match(e.request).then(hit=>hit||caches.match('./index.html'))));return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok&&res.type==='basic'){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res;})));
});

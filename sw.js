const CACHE='gymos-static-v500';
const ASSETS=["./", "./workout-intelligence.mjs", "./app.js", "./session-defaults.mjs", "./exercise-extra-media.js", "./index.html", "./data.js", "./styles.css", "./cardio.js", "./catalog.js", "./gymos-session-upgrade.mjs", "./gym-equipment.mjs", "./training-modes.mjs", "./exercise-media.js", "./manifest.webmanifest", "./planner.mjs", "./assets/icon.svg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);if(e.request.method!=='GET'||url.origin!==self.location.origin)return;
  // Network-first for navigation and code so a deployed update can take effect.
  if(e.request.mode==='navigate'||/\.(m?js|css)$/.test(url.pathname)){
    e.respondWith(fetch(e.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res;}).catch(()=>caches.match(e.request).then(hit=>hit||caches.match('./index.html'))));return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok&&res.type==='basic'){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res;})));
});

const CACHE='gymos-static-v46';
const ASSETS=['./','./index.html','./styles.css','./app.js','./exercise-media.js','./exercise-extra-media.js','./gym-equipment.mjs','./data.js','./catalog.js','./cardio.js','./planner.mjs','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/hero-athlete.webp','./assets/hero-athlete-mobile.webp','./assets/exercise-specific/bird-dog.webp','./assets/exercise-specific/seated-hip-abduction.webp','./assets/exercise-specific/quadruped-leg-extension.webp','./assets/exercise-specific/banded-clamshell.webp','./assets/exercise-specific/lateral-band-walk.webp','./assets/exercise-specific/march-in-place.webp','./assets/exercise-specific/shadow-boxing.webp','./assets/exercise-specific/ski-erg.webp','./assets/exercise-specific/medicine-ball-slam.webp'];
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

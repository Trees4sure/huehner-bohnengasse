/* Service Worker – Die Hühner der Bohnengasse
   Speichert das Spiel, damit es auch ohne Internet startet.
   Bei einer neuen Spielversion CACHE hochzählen (v1 → v2 …). */
const CACHE = 'bohnengasse-v1';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const timeout = ms => new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms));

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Spielseite: zuerst Netz (damit Updates sofort ankommen), sonst gespeicherte Fassung
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cached = await caches.match('./index.html');
      try {
        const res = await (cached ? Promise.race([fetch(req), timeout(4000)]) : fetch(req));
        if (res && res.ok) {
          const c = await caches.open(CACHE);
          c.put('./index.html', res.clone());
        }
        return res;
      } catch (e) {
        return cached || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  // Icons, Manifest: aus dem Speicher, sonst Netz
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});

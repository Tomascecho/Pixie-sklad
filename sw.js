
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pixie-sklad-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './prijem.html',
        './vydej.html',
        './pixie.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

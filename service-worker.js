self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pixie-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'prijem.html',
        'vydej.html',
        'style.css',
        'favicon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

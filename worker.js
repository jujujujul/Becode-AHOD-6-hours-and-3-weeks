self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
      'app.js',
      'backcarousel.png',
      'backgroundhaut.png',
      'bubulles.png',
      'Carou1.png',
      'Carou2.png',
      'carou3.png',
      'Carou4.png',
      'donate_script.js',
      'donate.html',
      'favicon.png',
      'goTop.png',
      'img-1.png',
      'img-2.jpg',
      'img-3.jpg',
      'index.html',
      'newsletter-form.html',
      'newsletter-script.js',
      'script.js',
      'style-donate-form.css',
      'style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

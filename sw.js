const CACHE_NAME = 'dvyv-cache-v1';
const urlsToCache = [
  '/dvyv/',
  '/dvyv/index.html',
  '/dvyv/css/style.css',
  '/dvyv/js/demo-app.js',
  '/dvyv/js/demo-data.js',
  '/dvyv/manifest.json',
  '/dvyv/icons/icon-72x72.png',
  '/dvyv/icons/icon-192x192.png',
  '/dvyv/icons/icon-512x512.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Update Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

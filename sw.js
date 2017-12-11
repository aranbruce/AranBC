if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    }).then(function() {
        // success
    }).catch(function(e) {
        // failed
    });
}

var CACHE_NAME = 'cache-v1';

var resourcesToCache = [
  '/',
  '/css/styles.css',
  '/scripts/jsScripts.js',
  '/index.html',
  '/manifest.json',
  '/favicon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    // open the app browser cache
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // add all app assets to the cache
        return cache.addAll(resourcesToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // try to find corresponding response in the cache
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          // cache hit: return cached result
          return response;
        }

        // not found: fetch resource from the server
        return fetch(event.request);
      })
  );
});

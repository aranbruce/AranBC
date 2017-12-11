if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/AranBC/sw.js', {
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

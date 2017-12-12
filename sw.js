var cacheName = 'v2';
var cacheFiles = [
  'index.html',
  'favicon.png',
  'css/styles.css',
  'images/aboutMe.png',
  'images/citySnappImage.png',
  'scripts/jsScripts.js',
  'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,800',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'
]

self.addEventListener('install', function(e) {
  console.log("[ServiceWorker] Installed")
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(cacheFiles);
    })
  )
})

self.addEventListener('activate', function(e) {
  console.log("[ServiceWorker] Activated")
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        if (thisCacheName !== cacheName) {
          console.log("[ServiceWorker] Removing Cached Files from ", thisCacheName);
          return caches.delete(thisCacheName);
        }
      }))
    })
  )
})

self.addEventListener('fetch', function(e) {
  console.log("[ServiceWorker] Fetching", e.request.url);
})

var cacheName = 'v2';
var cacheFiles = [
  'index.html',
  'citysnapp.html',
  'favicon.png',
  'css/styles.css',
  'images/aboutMe.png',
  'images/citySnappImage.png',
  'images/discover1.png',
  'images/discover2.png',
  'images/discover3.png',
  'images/goodToGo.png',
  'images/iPhoneImage.png',
  'images/login.png',
  'images/planning1.png',
  'images/planning2.png',
  'images/planning3.png',
  'images/search.png',
  'images/sharing1.png',
  'images/sharing2.png',
  'images/sharing3.png',
  'scripts/jsScripts.js',
  'https://fonts.googleapis.com/css?family=Montserrat:400,600,800',
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
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        console.log("[ServiceWorker] Found in cache", e.request.url);
        return response;
      }
      var requestClone = e.request.clone();
      fetch(requestClone).then(function(response) {
        if (!response) {
          console.log("[ServiceWorker] No response from fetch");
          return response;
        }
        var responseClone = response.clone();
        caches.open(cacheName).then(function(cache) {
          cache.put(e.request, responseClone);
          return response;
        });

      })
      .catch(function(error) {
        console.log("[ServiceWorker] Error Fetching and Caching New Data", error);
      })
    })
  )
})

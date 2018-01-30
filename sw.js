const PRECACHE = 'precache-v1.0';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  './',
  'index.html',
  'citysnapp.html',
  'thankyou.html',
  'favicon.png',
  'manifest.json',
  'css/styles.css',
  'images/aboutMe.png',
  'images/discover1.png',
  'images/discover2.png',
  'images/discover3.png',
  'images/goodToGo.png',
  'images/iPhoneImage.png',
  'images/planning1.png',
  'images/planning2.png',
  'images/planning3.png',
  'images/login.png',
  'images/logo.svg',
  'images/search.png',
  'images/sharing1.png',
  'images/sharing2.png',
  'images/sharing3.png',
  'images/citysnappProject.png',
  'images/comingSoon.png',
  'scripts/jsScripts.js',
  'scripts/scrollReveal.js',
  'https://fonts.googleapis.com/css?family=Montserrat:400,600,800',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});

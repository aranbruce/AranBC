self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?launcher=true',
       '/?launcher=true',
       '/styles/main.css',
       '/scripts/jsScripts.js',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

});

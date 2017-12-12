self.addEventListener('install', function(e) {
  console.log("[ServiceWorker] Installed")
})

self.addEventListener('active', function(e) {
  console.log("[ServiceWorker] Activated")
})

self.addEventListener('fetch', function(e) {
  console.log("[ServiceWorker] Fetching", e.request.url);
})

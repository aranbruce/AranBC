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
  '/index.html?launcher=true',
  '/manifest.json',
  '/favicon.png'
];

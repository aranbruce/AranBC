!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n={"read-through":"read-through-cache-v1.25"};self.addEventListener("activate",function(e){var t=Object.keys(n).map(function(e){return n["scripts/swRegister.js"]});e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===t.indexOf(e))return console.log("Deleting out of date cache:",e),caches.delete(e)}))}))}),self.addEventListener("fetch",function(e){console.log("Handling fetch event for",e.request.url),e.respondWith(caches.open(n["read-through"]).then(function(t){return t.match(e.request).then(function(n){return n?(console.log(" Found response in cache:",n),n):(console.log(" No response for %s found in cache. About to fetch from network...",e.request.url),fetch(e.request.clone()).then(function(n){return console.log("  Response for %s from network is: %O",e.request.url,n),n.status<400&&t.put(e.request,n.clone()),n}))}).catch(function(e){throw console.error("  Read-through caching failed:",e),e})}))})}]);
<script>
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
         .register('sw.js')
         .then(function(registration) {
            console.log("Service Worker Registered");
          })
          .catch(function(error) {
            console.log("Service Worker Failed to Register", error);
          })
  }
</script>

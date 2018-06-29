// Initialisation du service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('worker.js').then(function(reg) {
    // registration worked
    console.log('Registration succeeded');
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};

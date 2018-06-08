function aFunction(callback) {
  if (typeof callback === 'function') {
    callback();
  } else {
    // Fehlerbehandlung
  }
}

aFunction(function() {
  console.log('anonyme Funktion');
});

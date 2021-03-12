define('validator', ['persistence'], function(persistence) { // Name des Moduls // Zu importierende Module
  // Funktion, die das Modul zurückliefert
  const module = {
    format: 'HTML5',
    results: [],
    validate: function() {
      console.log('Validierung gestartet: ' + format);
      // Hier weiterer Code, der die Ergebnisse ermittelt
      persistence.saveResults(results);
    }
  };
  return module;
});

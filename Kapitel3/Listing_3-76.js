const ValidatorModule = (function(module) {
  let format = 'HTML5';
  // 2.) Eigenschaften und Funktionen hinzufügen
  module.results = [];
  module.validate = function() {
    console.log('Validierung gestartet: ' + format);
    module.results.push('Test fehlgeschlagen');
  };
  module.getResults = function() {
    return results;
  };
  // 3.) Modul selber als Rückgabewert liefern
  return module;
})(ValidatorModule || {}); // 1.) Modul selber als Parameter übergeben
ValidatorModule.validate();

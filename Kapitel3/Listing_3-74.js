var PersistenceModule =
  PersistenceModule ||
  (function() {
    function saveResults(results) {
      console.log('Ergebnisse gespeichert: ' + results);
    }
    return {
      saveResults: saveResults
    };
  })();
var ValidatorModule =
  ValidatorModule ||
  (function(persistenceModule) {
    let format = 'HTML5';
    let results = [];
    function validate() {
      console.log('Validierung gestartet: ' + format);
      ergebnisse.push('Test fehlgeschlagen');
      persistenceModule.saveResults(results);
    }
    function getResults() {
      return results;
    }
    return {
      validate: validate,
      getResults: getResults
    };
  })(persistenceModule);

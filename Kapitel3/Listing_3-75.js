const ValidatorModule = (function() {
  let format = 'HTML5';
  let results = [];
  function validate() {
    console.log('Validierung gestartet: ' + format);
    results.push('Test fehlgeschlagen');
  }
  function getResults() {
    return results;
  }
  return {
    validate: validate,
    getResults: getResults
  };
})();
ValidatorModule.validate();
const results = ValidatorModule.getResults();
console.log(results);
// Ausgabe: Test fehlgeschlagen
// Verändern der Testergebnisse:
results[0] = 'Test bestanden';
const results2 = ValidatorModule.getResults();
console.log(results2);
// Ausgabe: Test bestanden

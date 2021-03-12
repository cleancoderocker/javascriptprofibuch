const persistence = require('./persistence');
const format = 'HTML5';
const results = [];
function validate() {
  console.log('Validierung gestartet: ' + format);
  // Hier weiterer Code, der die Ergebnisse ermittelt
  persistence.saveResults(results);
}
module.exports.validate = validate;

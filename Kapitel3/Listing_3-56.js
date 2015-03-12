// Datei Validator.js
var persistenz = require('Persistenz');
var format = 'HTML5';
var ergebnisse = [];
function validiere: function() {
    console.log('Validierung gestartet: ' + format);
// Hier weiterer Code, der die Ergebnisse ermittelt
    persistenz.speichereErgebnisse(ergebnisse);
}
exports.validiere = validiere;
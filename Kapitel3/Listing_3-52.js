var ValidatorModul = ValidatorModul || (function () {
        var format = 'HTML5';
        var ergebnisse = [];
        function validiere() {
            console.log('Validierung gestartet: ' + format);
            ergebnisse.push('Test fehlgeschlagen');
        }
        function getErgebnisse() {
            return ergebnisse;
        }
        return {
            validiere: validiere,
            getErgebnisse: getErgebnisse
        }
    })();
ValidatorModul.validiere();
var ergebnisse = ValidatorModul.getErgebnisse(); console.log(ergebnisse);
// Ausgabe: Test fehlgeschlagen ergebnisse[0] = 'Test bestanden';
var ergebnisse2 = ValidatorModul.getErgebnisse(); console.log(ergebnisse2);
// Ausgabe: Test bestanden
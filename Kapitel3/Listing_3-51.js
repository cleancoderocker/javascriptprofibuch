var PersistenzModul = PersistenzModul || (function () {
        function speichereErgebnisse(ergebnisse) {
            console.log('Ergebnisse gespeichert: ' + ergebnisse);
        }
        return {
            speichereErgebnisse: speichereErgebnisse
        }
    })();
var ValidatorModul = ValidatorModul || (function (persistenzModul) {
        var format = 'HTML5';
        var ergebnisse = [];
        function validiere() {
            console.log('Validierung gestartet: ' + format);
            ergebnisse.push('Test fehlgeschlagen');
            persistenzModul.speichereErgebnisse(ergebnisse);
        }
        function getErgebnisse() {
            return ergebnisse;
        }
        return {
            validiere: validiere, getErgebnisse: getErgebnisse
        }
    })(PersistenzModul);
var ValidatorModul = ValidatorModul || (function () {
        var format = 'HTML5';
// private Methode
        function validiere() {
            console.log('Validierung gestartet: ' + format);
            validierungBeendet();
        }
// private Methode
        function validierungBeendet() {
            console.log('Validierung beendet: ' + format);
        }
// öffentliche API
        return {
// öffentliche Referenz auf private Methode
            validiere: validiere
        }
    })();
ValidatorModul.validiere();
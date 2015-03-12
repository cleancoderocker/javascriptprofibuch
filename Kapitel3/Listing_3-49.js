var ValidatorModul = ValidatorModul || (function () {
        var format = 'HTML5';
        return {
            validiere: function() {
                console.log('Validierung gestartet: ' + format);
// Aufruf einer anderen Methode im selben Modul
                ValidatorModul.validierungBeendet();
            },
            validierungBeendet: function() {
                console.log('Validierung beendet: ' + format); }
        }
    })();
ValidatorModul.validiere();
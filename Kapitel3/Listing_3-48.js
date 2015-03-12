var ValidatorModul = ValidatorModul || (function () {
// private Variable
        var format = 'HTML5';
// öffentliche API
        return {
// öffentliche Funktion
            validiere: function() {
                console.log('Validierung gestartet: ' + format);
            }
        }
    })();
ValidatorModul.validiere(); // Ausgabe: HTML5
ValidatorModul.format = 'SGML';
ValidatorModul.validiere(); // Ausgabe: HTML5
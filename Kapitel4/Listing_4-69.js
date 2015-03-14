/* Funktioniert nur in ES6 */
asynchroneFunktion()
    .then(function(ergebnis) {
        return ergebnis * 2;
    })
    .then(function(ergebnis) {
        console.log(ergebnis);
    });
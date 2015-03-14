/* Funktioniert nur in ES6 */
function asynchroneFunktion() {
    var promise = new Promise(
        function(resolve, reject) {
            window.setTimeout(
                function() {
                    var ergebnis = 4711; // hier normalerweise asynchrone Berechnung
                    if(ergebnis < 4000) {
                        reject('Ergebnis kleiner als 4000');
                    } else {
                        resolve(ergebnis);
                    }
                }, Math.random() * 2000);
            }
        );
    );
    return promise;
}
asynchroneFunktion().then(
    function(ergebnis) {
        console.log(ergebnis);
    },
    function(fehler) {
        console.error(fehler);
    },
);
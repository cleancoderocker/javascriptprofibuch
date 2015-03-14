/* Funktioniert nur in ES6 */
function test() {
    var ergebnis = [];
    for(var i=1; i<11; i++) {
        let zahl = i;
        ergebnis[i] = function() {
            return zahl;
        };
    }
    ergebnis.forEach(function(zahlFunktion) {
        console.log(zahlFunktion());
    });
}
test();
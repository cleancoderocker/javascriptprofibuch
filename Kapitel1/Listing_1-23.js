/* Funktioniert nur in ES6 */
function addiereAlle2(...zahl) {
    var ergebnis = 0;
    for(var i=0; i<zahl.length; i++) {
        ergebnis += zahl[i];
    }
    return ergebnis;
}
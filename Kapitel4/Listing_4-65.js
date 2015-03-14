/* Funktioniert nur in ES6 */
function* zaehler() {
    var zaehler = 0;
    while(true) {
        zaehler++;
        var vonVorne = yield zaehler;
        if(vonVorne === true) {
            zaehler = 0;
        }
    }
}
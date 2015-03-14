/* Funktioniert nur in ES6 */
function* zaehler() {
    var zaehler = 0;
    while(true) {
        zaehler++;
        yield zaehler;
    }
}
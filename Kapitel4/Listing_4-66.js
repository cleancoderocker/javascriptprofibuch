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
var zaehlerInstanz = zaehler();
console.log(zaehlerInstanz.next()); // {done: false, value: 1}
console.log(zaehlerInstanz.next()); // {done: false, value: 2}
console.log(zaehlerInstanz.next()); // {done: false, value: 3}
console.log(zaehlerInstanz.next()); // {done: false, value: 4}
console.log(zaehlerInstanz.next(true)); // {done: false, value: 1}
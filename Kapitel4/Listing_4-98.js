/* Funktioniert nur in ES6 */
var zahlen = [1, 2, 3, 4, 5, 6, 7, 8];
var iterator = zahlen.keys();
var index = iterator.next();
// Ausgabe hintereinander: 0, 1, 2, 3, 4, 5, 6, 7
while(!index.done) {
    console.log(index.value);
    index = iterator.next();
}
var iterator = zahlen.values();
var wert = iterator.next();
// Ausgabe hintereinander: 1, 2, 3, 4, 5, 6, 7, 8
while(!wert.done) {
    console.log(wert.value);
    wert = iterator.next();
}
var iterator = zahlen.entries();
var entry = iterator.next();
// Ausgabe hintereinander: [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
[6, 7], [7, 8]
while(!entry.done) {
    console.log(entry.value);
    entry = iterator.next();
}
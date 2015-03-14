/* Funktioniert nur in ES6 */
// Anlegen eines Arrays der Länge 8
var zahlen = new Array(8);
// Füllen der ersten vier Positionen mit dem Wert 1
zahlen.fill(1, 0, 4);
// Füllen aller Positionen ab Index 4 mit dem Wert 2
zahlen.fill(2, 4);
console.log(zahlen); // [1, 1, 1, 1, 2, 2, 2, 2]
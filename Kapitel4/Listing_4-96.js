// Anlegen eines Arrays der Länge 8
const numbers = new Array(8);
// Füllen der ersten vier Positionen mit dem Wert 1
numbers.fill(1, 0, 4);
// Füllen aller Positionen ab Index 4 mit dem Wert 2
numbers.fill(2, 4);
console.log(numbers); // [1, 1, 1, 1, 2, 2, 2, 2]

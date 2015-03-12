function addition(x, y) {
    return x + y;
}
var operation = addition;
var ergebnis = addition(2,2);
var ergebnis2 = operation(2,2);
console.log(addition.name); // Ausgabe: addition
console.log(operation.name); // Ausgabe: addition
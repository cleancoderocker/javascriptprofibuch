/* Funktioniert nur in ES6 */
var generator = erstEinsDannZwei();
var ergebnis = generator.next();
console.log(ergebnis); // {done: false, value: 1}
ergebnis = generator.next();
console.log(ergebnis); // {done: false, value: 2}
ergebnis = generator.next();
console.log(ergebnis); // {done: true, value: undefined}
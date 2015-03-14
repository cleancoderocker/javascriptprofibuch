/* Funktioniert nur in ES6 */
var iterator = interpretenWrapper[Symbol.iterator]();
console.log(iterator.next()); // {value: 'Monster Magnet', done: false}
console.log(iterator.next()); // {value: 'Ben Harper', done: false}
console.log(iterator.next()); // {value: 'QOTSA', done: false}
console.log(iterator.next()); // {value: 'Kyuss', done: false}
console.log(iterator.next()); // {done: true}
for(let interpret of interpretenWrapper) {
// Ausgabe der Werte 'Monster Magnet', 'Ben Harper', 'QOTSA' und 'Kyuss'
    console.log(interpret);
}
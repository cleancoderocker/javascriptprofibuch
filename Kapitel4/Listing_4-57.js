/* Funktioniert nur in ES6 */
var interpreten = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet']
var iterator = interpreten.values();
var interpret = iterator.next();
console.log(interpret); // {value: 'Kyuss', done: false}
interpret = iterator.next();
console.log(interpret); // {value: 'QOTSA', done: false}
interpret = iterator.next();
console.log(interpret); // {value: 'Ben Harper', done: false}
interpret = iterator.next();
console.log(interpret); // {value: 'Monster Magnet', done: false}
interpret = iterator.next();
console.log(interpret); // {done: true}
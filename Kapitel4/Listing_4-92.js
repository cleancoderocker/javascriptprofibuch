/* Funktioniert nur in ES6 */
var name = 'Mustermann';
console.log(name.startsWith('Muster')); // true
console.log(name.startsWith('Muster', 6)); // false
console.log(name.startsWith('mann', 6)); // true
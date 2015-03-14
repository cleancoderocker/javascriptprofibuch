/* Funktioniert nur in ES6 */
var name = 'Mustermann';
console.log(name.endsWith('mann')); // true
console.log(name.endsWith('mann', 6)); // false
console.log(name.endsWith('Muster', 6)); // true
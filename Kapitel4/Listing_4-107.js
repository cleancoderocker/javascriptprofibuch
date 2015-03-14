/* Funktioniert nur in ES6 */
var vorname = Symbol('Vorname'); // Parameter ist optional
var nachname = Symbol('Nachname'); // Parameter ist optional
var person = {};
person[vorname] = 'Max';
person[nachname] = 'Mustermann';
console.log(person[vorname]); // Max
console.log(person[nachname]); // Mustermann
console.log(person[0]); // undefined
console.log(person[1]); // undefined
console.log(person['vorname']); // undefined
console.log(person['nachname']); // undefined
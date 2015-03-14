/* Funktioniert nur in ES6 */
var person = { name: 'Max', nachname: 'Mustermann' };
var mitarbeiter = { id: 4711 }
var maxDerMitarbeiter = Object.assign(person, mitarbeiter);
console.log(maxDerMitarbeiter);
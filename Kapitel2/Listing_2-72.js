function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName
  };
}
const createMustermann = createPerson.bind(null, 'Mustermann');
const max = createMustermann('Max');
// Ausgabe: { firstName: 'Max', lastName: 'Mustermann' }
console.log(max);
const moritz = createMustermann('Moritz');
// Ausgabe: { firstName: 'Moritz', lastName: 'Mustermann' }
console.log(moritz);

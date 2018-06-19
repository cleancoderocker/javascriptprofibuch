const person = {
  firstName: 'Max',
  lastName: 'Mustermann'
};
const employee = {
  id: 4711
};
const max = Object.assign(person, employee);
console.log(max);
// Ausgabe:
// { firstName: 'Max', lastName: 'Mustermann', id: 4711 }

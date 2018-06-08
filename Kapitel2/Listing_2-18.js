const anotherPerson = {
  firstName: 'Moritz',
  getFirstName: getFirstNameGlobal
};
const yetAnotherPerson = {
  firstName: 'Peter',
  getFirstName: getFirstNameGlobal
};
console.log(anotherPerson.getFirstName()); // Ausgabe: Moritz
console.log(yetAnotherPerson.getFirstName()); // Ausgabe: Peter

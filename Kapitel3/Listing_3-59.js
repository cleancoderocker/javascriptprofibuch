function Person(firstName, lastName) {
  // Objekteigenschaften
  this.firstName = firstName;
  this.lastName = lastName;
}
// Statische Eigenschaft
Person.MAX_WEIGHT = 2000;
// Statische Methode
Person.createDummyPerson = function() {
  return new Person('Max', 'Mustermann');
};
// Objektmethoden
Person.prototype.getFirstName = function() {
  return this.firstName;
};
Person.prototype.getLastName = function() {
  return this.lastName;
};
// Ausgabe: 2000
console.log(Person.MAX_WEIGHT);
// Ausgabe: Person {firstName: "Max", lastName: "Mustermann"}
console.log(Person.createDummyPerson());
// Fehlermeldung, da getFirstName() keine statische Methode ist:
// console.log(Person.getFirstName());
console.log(new Person('Moritz', 'Mustermann').getFirstName()); // Moritz
// Fehlermeldung, da createDummyPerson() keine Objektmethode ist:
// console.log(new Person().createDummyPerson());

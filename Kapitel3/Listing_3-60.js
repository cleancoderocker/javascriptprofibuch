class Person {
  constructor(firstName, lastName) {
    // Objekteigenschaften
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Statische Methode
  static createDummyPerson() {
    return new Person('Max', 'Mustermann');
  }
  // Objektmethoden
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
}
// Statische Eigenschaft
Person.MAX_WEIGHT = 2000;
// Ausgabe: 2000
console.log(Person.MAX_WEIGHT);
// Ausgabe: Person {firstName: "Max", lastName: "Mustermann"}
console.log(Person.createDummyPerson());
// Fehlermeldung, da getName() keine statische Methode ist:
// console.log(Person.getFirstName());
console.log(new Person('Moritz', 'Mustermann').getFirstName()); // Moritz
// Fehlermeldung, da createDummyPerson() keine Objektmethode ist:
// console.log(new Person().createDummyPerson());

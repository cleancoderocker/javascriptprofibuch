class Person {
  // Konstruktor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Objektmethode
  toString() {
    return this.firstName + ' ' + this.lastName;
  }
  // Statische Methode
  static generateRandomNumber() {
    return Math.random();
  }
}

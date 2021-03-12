const DrivingMixin = superclass =>
  class extends superclass {
    drive() {
      console.log("I'm driving");
    }
  };
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
  }
  sayHello() {
    console.log(this.firstName + ': "Hello"');
  }
}
class DrivingPerson extends DrivingMixin(Person) {}
const max = new Person('Max', 'Mustermann');
max.sayHello(); // Max: "Hello"
const moritz = new DrivingPerson('Moritz', 'Mustermann');
moritz.sayHello(); // Moritz: "Hello"
moritz.drive(); // I'm driving

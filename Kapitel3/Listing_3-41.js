const DrivingMixin = superclass =>
  class extends superclass {
    drive() {
      console.log("I'm driving");
    }
  };
const FlyingMixin = superclass =>
  class extends superclass {
    fly() {
      console.log("I'm flying");
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
class FlyingPerson extends FlyingMixin(Person) {}
class FlyingAndDrivingPerson extends FlyingMixin(DrivingMixin(Person)) {}
const superman = new FlyingAndDrivingPerson('Clark', 'Kent');
superman.sayHello(); // Clark: "Hello"
superman.drive(); // I'm driving
superman.fly(); // I'm flying

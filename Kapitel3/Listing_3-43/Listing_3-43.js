const { mix } = require('mixwith');
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
class DrivingPerson extends mix(Person).with(DrivingMixin) {}
class FlyingPerson extends mix(Person).with(FlyingMixin) {}
class FlyingAndDrivingPerson extends mix(Person).with(
  DrivingMixin,
  FlyingMixin
) {}
const superman = new FlyingAndDrivingPerson('Clark', 'Kent');
superman.sayHello(); // Clark: "Hello"
superman.drive(); // I'm driving
superman.fly(); // I'm flying

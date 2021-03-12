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
class Animal {
  constructor(nickName) {
    this.nickName = nickName || '';
  }
}
class FlyingAndDrivingAnimal extends FlyingMixin(DrivingMixin(Animal)) {}
const superdog = new FlyingAndDrivingAnimal('Bello');
superdog.drive(); // I'm driving
superdog.fly(); // I'm flying

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log('fressen');
  }
}
class Dog extends Animal {
  constructor(name, race) {
    super(name);
    this.race = race;
  }
  eat() {
    super.eat();
    super.eat();
  }
}
const bello = new Dog('Bello', 'Malteser');
bello.eat();

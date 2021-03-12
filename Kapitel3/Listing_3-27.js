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
}

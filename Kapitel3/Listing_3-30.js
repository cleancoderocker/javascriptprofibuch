class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log('fressen');
  }
}
function generateSuperclass() {
  return Animal;
}
class Dog extends generateSuperclass() {
  constructor(name, race) {
    super(name);
    this.race = race;
  }
}

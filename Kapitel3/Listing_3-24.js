// Schritt 1
function Animal(name) {
  this.name = name;
}
// Schritt 2
Animal.prototype.eat = function() {
  console.log('fressen');
};
// Schritt 3
function Dog(name, race) {
  Animal.call(this, name);
  this.race = race;
}
// Schritt 4
Dog.prototype = new Animal();
// Schritt 5
Dog.prototype.constructor = Dog;
// Schritt 6
Dog.prototype.bark = function() {
  console.log(this.name + ': Wau');
};
const bello = new Dog('Bello', 'Malteser');
const struppi = new Dog('Struppi', 'Havaneser');
struppi.bark = function() {
  Dog.prototype.bark.call(this);
  Dog.prototype.bark.call(this);
};
bello.bark(); // Bello: Wau
struppi.bark(); // 2 x Struppi: Wau

const animal = {
  name: null,
  eat() {
    console.log('fressen');
  }
};
const dog = Object.create(animal);
dog.bark = function() {
  console.log('Wau');
};
const bello = Object.create(dog);
bello.name = 'Bello';
const struppi = Object.create(dog);
struppi.name = 'Struppi';
bello.eat(); // fressen
bello.bark(); // Wau

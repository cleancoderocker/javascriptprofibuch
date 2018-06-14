const animal = {
  eat() {
    console.log('fressen');
  }
};
const dog = Object.create(animal);
dog.bark = function() {
  console.log(this.name + ': Wau');
};
const bello = Object.create(dog);
bello.name = 'Bello';
const struppi = Object.create(dog);
struppi.name = 'Struppi';
struppi.bark = function() {
  dog.bark();
  dog.bark();
};
struppi.bark(); // 2 x undefined: Wau

const dog = {
  name: null,
  bark() {
    console.log('Wau');
  }
};
const bello = Object.create(dog);
bello.name = 'Bello';
const struppi = Object.create(dog);
struppi.name = 'Struppi';
dog.bark(); // Wau
bello.bark(); // Wau
struppi.bark(); // Wau

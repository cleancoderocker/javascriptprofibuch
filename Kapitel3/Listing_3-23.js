const Animal = {
  eat() {
    console.log('fressen');
  }
};
const Dog = Object.create(Animal);
Dog.bark = function() {
  console.log(this.name + ': Wau');
};
const bello = Object.create(Dog);
bello.name = 'Bello';
const struppi = Object.create(Dog);
struppi.name = 'Struppi';
struppi.bark = function() {
  Dog.bark.call(this);
  Dog.bark.call(this);
};
struppi.bark(); // 2 x 'Struppi: Wau'

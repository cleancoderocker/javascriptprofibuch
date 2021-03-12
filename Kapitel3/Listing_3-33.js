function extend(target, source) {
  target = target || {};
  for (let property in source) {
    if (source.hasOwnProperty(property)) {
      target[property] = source[property];
    }
  }
  return target;
}

const person = {
  name: 'Max',
  getName() {
    return this.name;
  }
};
const dog = {
  name: 'Bello',
  bark() {
    console.log('Wau wau');
  }
};
extend(dog, person);
person.getName = function() {
  console.log('getName() überschrieben');
  return this.name;
};
console.log(person.getName());
// Ausgabe erst 'getName() überschrieben', dann zweimal 'Max'
console.log(dog.getName());
// Ausgabe 'Bello'

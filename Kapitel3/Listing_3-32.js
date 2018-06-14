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
console.log(dog.getName()); // Ausgabe: "Max"

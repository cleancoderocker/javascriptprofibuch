const personValidator = {
  set(objekt, property, value) {
    if (property === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('Das Alter muss eine Zahl sein.');
      }
    }
    objekt[property] = value;
  }
};
const person = new Proxy({}, personValidator);
person.age = 100;
console.log(person.age); // 100
person.age = 'Mitte 20'; // TypeError: Das Alter muss eine Zahl sein.

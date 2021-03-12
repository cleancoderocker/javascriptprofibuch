function mixin(source, target) {
  for (let property in source) {
    if (source.hasOwnProperty(property)) {
      target[property] = source[property];
    }
  }
}

function Person(firstName, lastName) {
  this.firstName = firstName || '';
  this.lastName = lastName || '';
}
Person.prototype.sayHello = function() {
  console.log(this.firstName + ': "Hello"');
};
const max = new Person('Max', 'Mustermann');
max.sayHello(); // Max: "Hello"
// max.drive(); // Error: max.drive is not a function
console.log(Person.prototype);
// Person { sayHello: [Function] }
function Driver() {}
Driver.prototype.drive = function() {
  console.log("I'm driving");
};
// Anwendung der mixin()-Funktion
mixin(Driver.prototype, Person.prototype);
var moritz = new Person('Moritz', 'Mustermann');
moritz.sayHello(); // Moritz: "Hello"
moritz.drive(); // I'm driving
console.log(Person.prototype);
// Person { sayHello: [Function], drive: [Function] }
max.drive(); // I'm driving

function operationFactory(name) {
  switch (name) {
    case 'add':
      return function(x, y) {
        return x + y;
      };
    case 'subtract':
      return function(x, y) {
        return x - y;
      };
    case 'multiply':
      return function(x, y) {
        return x * y;
      };
    case 'divide':
      return function(x, y) {
        return x / y;
      };
    default:
      return function() {
        return NaN;
      };
  }
}
const add = operationFactory('add');
console.log(add(2, 2)); // Ausgabe: 4
const subtract = operationFactory('subtract');
console.log(subtract(2, 2)); // Ausgabe: 0
const multiply = operationFactory('multiply');
console.log(multiply(2, 2)); // Ausgabe: 4
const divide = operationFactory('divide');
console.log(divide(2, 2)); // Ausgabe: 1
const unknown = operationFactory('unknown');
console.log(unknown(2, 2)); // Ausgabe: NaN

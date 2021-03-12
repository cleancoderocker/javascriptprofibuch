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
console.log(operationFactory('add')(2, 2)); // Ausgabe: 4
console.log(operationFactory('subtract')(2, 2)); // Ausgabe: 0
console.log(operationFactory('multiplay')(2, 2)); // Ausgabe: 4
console.log(operationFactory('divide')(2, 2)); // Ausgabe: 1

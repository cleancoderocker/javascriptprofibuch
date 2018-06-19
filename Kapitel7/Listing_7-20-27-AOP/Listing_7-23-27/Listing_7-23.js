const meld = require('meld');
class Calculator {
  sum(x, y) {
    console.log(`Berechne ${x} + ${y}`);
    return x + y;
  }
}
const calculator = new Calculator();
meld.before(calculator, 'sum', (...args) => {
  console.log(`Aufruf von calculator.sum() mit Argumenten: ${args.join(', ')}`);
});
console.log(calculator.sum(5, 6));
// Aufruf von calculator.sum() mit Argumenten: 5, 6
// Berechne 5 + 6
// 11

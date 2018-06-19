const meld = require('meld');
class Calculator {
  sum(x, y) {
    console.log(`Berechne ${x} + ${y}`);
    return x + y;
  }
}
const calculator = new Calculator();

meld.after(calculator, 'sum', result => {
  console.log(`Aufruf von calculator.sum() ergab: ${result}`);
});
console.log(calculator.sum(5, 6));
// Berechne 5 + 6
// Aufruf von calculator.sum() ergab: 11
// 11

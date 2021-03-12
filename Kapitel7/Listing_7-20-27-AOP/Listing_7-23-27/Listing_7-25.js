const meld = require('meld');
class Calculator {
  sum(x, y) {
    console.log(`Berechne ${x} + ${y}`);
    return x + y;
  }
}
const calculator = new Calculator();
meld.around(calculator, 'sum', joinpoint => {
  console.log(
    `Aufruf von calculator.sum() mit Argumenten: ${joinpoint.args.join(', ')}`
  );
  const result = joinpoint.proceed();
  console.log(`Aufruf von calculator.sum() ergab: ${result}`);
  return result;
});
console.log(calculator.sum(5, 6));
// Aufruf von calculator.sum() mit Argumenten: 5, 6
// Berechne 5 + 6
// Aufruf von calculator.sum() ergab: 11
// 11

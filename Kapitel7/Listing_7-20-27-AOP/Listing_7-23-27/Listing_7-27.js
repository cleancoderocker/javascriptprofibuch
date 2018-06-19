const meld = require('meld');
class Calculator {
  sum(x, y) {
    console.log(`Berechne ${x} + ${y}`);
    return x + y;
  }
}
const calculator = new Calculator();
meld.around(
  calculator,
  'sum',
  (() => {
    const cache = {};
    return joinpoint => {
      const key = joinpoint.args.join(', ');
      let result;
      if (!cache[key]) {
        console.log(`Berechne Ergebnis für: ${key}`);
        cache[key] = joinpoint.proceed();
      } else {
        console.log(`Hole Ergebnis aus Cache für: ${key}`);
      }
      return cache[key];
    };
  })()
);
const result1 = calculator.sum(5, 6);
// --> Berechne Ergebnis für: 5, 6
const result2 = calculator.sum(5, 6);
// --> Hole Ergebnis aus Cache für: 5, 6
const result3 = calculator.sum(8, 9);
// --> Berechne Ergebnis für: 8, 9
const result4 = calculator.sum(8, 9);
// --> Hole Ergebnis aus Cache für: 8, 9

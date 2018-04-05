// Datei Calculator.js
class Calculator {
  sum(x, y) {
    return x + y;
  }
  prod(x, y) {
    return x * y;
  }
}
const calculator = new Calculator();
// Anfang AOP-Code
// 1.) Originalmethoden merken
const originalSum = calculator.sum;
const originalProd = calculator.prod;

// 2.) Methoden überschreiben
calculator.sum = (...args) => {
  // 3.) Advice implementieren, hier: Logging
  console.log(`Aufruf von sum() mit den Argumenten ${args.join(', ')}`);
  // 4.) Aufruf der Originalmethode
  return originalSum(...args);
};
calculator.prod = (...args) => {
  console.log(`Aufruf von prod() mit den Argumenten ${args.join(', ')}`);
  return originalProd(...args);
};
// Ende AOP-Code
console.log(calculator.sum(5, 6));
console.log(calculator.prod(5, 6));

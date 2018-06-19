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
const before = decorator => fn =>
  function(...args) {
    decorator(fn, args);
    return fn.apply(this, args);
  };

const log = (fn, ...args) =>
  console.log(`Aufruf von ${fn.name} mit den Argumenten ${args.join(', ')}`);

const logBefore = before(log);
calculator.sum = logBefore(calculator.sum);
calculator.prod = logBefore(calculator.prod);

// Ende AOP-Code
console.log(calculator.sum(5, 6));
console.log(calculator.prod(5, 6));

class Calculator {
  sum(x, y) {
    console.log(`Aufruf von sum() mit den Argumenten ${x}, ${y}`);
    return x + y;
  }
  prod(x, y) {
    console.log(`Aufruf von prod() mit den Argumenten ${x}, ${y}`);
    return x * y;
  }
}
let calculator = new Calculator();
console.log(calculator.sum(5, 6));
console.log(calculator.prod(5, 6));

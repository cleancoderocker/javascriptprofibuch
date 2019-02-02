function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
class Calculator {
  @readonly
  sum(x, y) {
    return x + y;
  }
}
let calculator = new Calculator();
console.log(calculator.sum(5, 6)); // 11
calculator.sum = (x, y) => x - y; // Nicht möglich, da @readonly
console.log(calculator.sum(5, 6)); // 11

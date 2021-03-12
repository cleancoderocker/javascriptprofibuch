function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
const operations = [add, subtract, multiply, divide];
let operation;
for (let i = 0; i < operations.length; i++) {
  operation = operations[i];
  const x = (i + 1) * 2;
  const y = (i + 1) * 4;
  const result = operation(x, y);
  console.log(result);
}
// Ausgabe:
// 6
// -4
// 72
// 0.5

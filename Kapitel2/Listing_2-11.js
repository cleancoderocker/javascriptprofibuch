function operationsContainer(x, y) {
  const add = function(x, y) {
    return x + y;
  };
  const subtract = function(x, y) {
    return x - y;
  };
  const multiply = function(x, y) {
    return x * y;
  };
  const divide = function(x, y) {
    return x / y;
  };
  console.log(add(x, y));
  console.log(subtract(x, y));
  console.log(multiply(x, y));
  console.log(divide(x, y));
}
operationsContainer(2, 2);

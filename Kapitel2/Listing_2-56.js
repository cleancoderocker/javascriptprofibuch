function addFour(x) {
  return x + 4;
}
function multiplyWithSeven(x) {
  return x * 7;
}
const addFourThenMultiplyWithSeven = compositionWithContext(
  multiplyWithSeven,
  addFour
);
const multiplyWithSevenThenAddFour = compositionWithContext(
  addFour,
  multiplyWithSeven
);
console.log(addFourThenMultiplyWithSeven(2)); // 42
console.log(multiplyWithSeven(addFour(2))); // 42
console.log(multiplyWithSevenThenAddFour(2)); // 18
console.log(addFour(multiplyWithSeven(2))); // 18

function addFour(x) {
  return x + 4;
}
function multiplyWithSeven(x) {
  return x * 7;
}
const compositionGeneric = function() {
  const functions = arguments;
  return function() {
    let args = arguments;
    for (let i = functions.length; i-- > 0; ) {
      args = [functions[i].apply(this, args)];
    }
    return args[0];
  };
};
const addEightThenMultiplyWithSeven = compositionGeneric(
  multiplyWithSeven,
  addFour,
  addFour
);
console.log(addEightThenMultiplyWithSeven(2)); // 70

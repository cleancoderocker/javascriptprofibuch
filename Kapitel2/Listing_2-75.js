function partialRight(aFunction /*, parameters...*/) {
  const parametersBound = Array.prototype.slice.call(arguments, 1);
  return function() {
    const parametersUnbound = Array.prototype.slice.call(arguments);
    return aFunction.apply(this, parametersUnbound.concat(parametersBound));
  };
}
const volumeZ5 = partialRight(volume, 5);
console.log(volumeZ5(2, 2)); // 20
console.log(volumeZ5(3, 3)); // 45
console.log(volumeZ5(4, 4)); // 80
console.log(volumeZ5(5, 5)); // 125

function volume(x, y, z) {
  return x * y * z;
}

function curry(firstParameter) {
  let n = 0;
  let aFunction = null;
  const parametersBound = Array.prototype.slice.call(arguments, 1);
  if (typeof firstParameter === 'function') {
    aFunction = firstParameter;
    n = firstParameter.length;
  } else {
    aFunction = parametersBound.shift();
    n = firstParameter;
  }
  return function() {
    const parametersUnbound = Array.prototype.slice.call(arguments);
    const parameters = parametersBound.concat(parametersUnbound);
    return parameters.length < n
      ? curry.apply(this, [n, aFunction].concat(parameters))
      : aFunction.apply(this, parameters);
  };
}

const volumeCurry = curry(volume);
console.log(volumeCurry(5)(5)(5)); // 125
const volumeX5 = volumeCurry(5);
console.log(volumeX5(2)(2)); // 20
console.log(volumeX5(3)(3)); // 45
console.log(volumeX5(4)(4)); // 80
console.log(volumeX5(5)(5)); // 125

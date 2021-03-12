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

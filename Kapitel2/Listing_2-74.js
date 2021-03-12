function partialRight(aFunction /*, parameters...*/) {
  const parametersBound = Array.prototype.slice.call(arguments, 1);
  return function() {
    const parametersUnbound = Array.prototype.slice.call(arguments);
    return aFunction.apply(this, parametersUnbound.concat(parametersBound));
  };
}

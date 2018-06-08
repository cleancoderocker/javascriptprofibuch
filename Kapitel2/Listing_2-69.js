function partial(aFunction /*, parameter...*/) {
  const parametersBound = Array.prototype.slice.call(arguments, 1);
  return function() {
    const parametersUnbound = Array.prototype.slice.call(arguments, 0);
    return aFunction.apply(this, parametersBound.concat(parametersUnbound));
  };
}

function partial(aFunction /*, parameter...*/) {
  const parametersBound = Array.prototype.slice.call(arguments, 1);
  return function() {
    const parametersUnbound = Array.prototype.slice.call(arguments, 0);
    return aFunction.apply(this, parametersBound.concat(parametersUnbound));
  };
}
const volumeX5 = partial(volume, 5);
const volumeX5Y5 = partial(volume, 5, 5);

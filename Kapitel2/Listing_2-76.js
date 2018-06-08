const _ = {}; // Platzhalter
function partialWithPlaceholders(aFunction /*, parameters...*/) {
  const parametersBound = Array.prototype.slice.call(arguments, 1);
  return function() {
    let i,
      parameters = [],
      parametersUnbound = Array.prototype.slice.call(arguments, 0);
    for (i = 0; i < parametersBound.length; i++) {
      if (parametersBound[i] !== _) {
        parameters[i] = parametersBound[i];
      } else {
        parameters[i] = parametersUnbound.shift();
      }
    }
    return aFunction.apply(this, parameters.concat(parametersUnbound));
  };
}

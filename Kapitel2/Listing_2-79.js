function curry(ersterParameter) {
  let n = 0;
  let funktion = null;
  const parameterGebunden = Array.prototype.slice.call(arguments, 1);
  if(typeof ersterParameter === "function") {
    funktion = ersterParameter;
    n = ersterParameter.length;
  } else {
    funktion = parameterGebunden.shift();
    n = ersterParameter;
  }
  return function() {
    const parameterUngebunden = Array.prototype.slice.call(arguments);
    const parameter = parameterGebunden.concat(parameterUngebunden);
    return parameter.length < n
      ? curry.apply(this, [n, funktion].concat(parameter))
      : funktion.apply(this, parameter);
  }
}

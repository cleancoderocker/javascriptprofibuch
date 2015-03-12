function curry(ersterParameter) {
    var n,
        funktion,
        parameterGebunden = Array.prototype.slice.call(arguments, 1);
    if(typeof ersterParameter === "function") {
        funktion = ersterParameter;
        n = ersterParameter.length;
    } else {
        funktion = parameterGebunden.shift();
        n = ersterParameter;
    }
    return function() {
        var parameterUngebunden = Array.prototype.slice.call(arguments);
        var parameter = parameterGebunden.concat(parameterUngebunden);
        return parameter.length < n
            ? curry.apply(this, [n, funktion].concat(parameter))
            : funktion.apply(this, parameter);
    }
}
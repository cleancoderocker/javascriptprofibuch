function volumen(x, y, z) {
    return x * y * z;
}
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
var volumenCurried = curry(volumen);
console.log(volumenCurried(5)(5)(5)); // 125
var volumenX5 = volumenCurried(5);
console.log(volumenX5(2)(2)); // 20
console.log(volumenX5(3)(3)); // 45
console.log(volumenX5(4)(4)); // 80
console.log(volumenX5(5)(5)); // 125
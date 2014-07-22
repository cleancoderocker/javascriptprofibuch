(function() {
    function volumen(x, y, z) {
        return x * y * z;
    }

    function volumenCurry(x) {
        return function(y) {
            return function(z) {
                return x * y * z;
            }
        }
    }

    console.log(volumenCurry(5)(5)(5));


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

    var volumenCurry = curry(volumen);
    console.log(volumenCurry(5)(5)(5));

    console.log(curry(volumen)(5)(5)(5));

    var volumenX5 = volumenCurry(5);
    console.log(volumenX5(2)(2));
    console.log(volumenX5(3)(3));
    console.log(volumenX5(4)(4));
    console.log(volumenX5(5)(5));
})();
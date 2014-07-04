(function() {
    function quaderFlaeche(x, y, z) {
        return x * y * z;
    }

    function quaderFlaeche(x) {
        return function(y) {
            return function(z) {
                return x * y * z;
            }
        }
    }

    console.log(quaderFlaeche(5)(5)(5));


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

    var quaderFlaecheCurried = curry(quaderFlaeche);
    console.log(quaderFlaecheCurried(5)(5)(5));

    console.log(curry(quaderFlaeche)(5)(5)(5));

    var quaderFlaecheX5 = quaderFlaecheCurried(5);
    console.log(quaderFlaecheX5(2)(2));
    console.log(quaderFlaecheX5(3)(3));
    console.log(quaderFlaecheX5(4)(4));
    console.log(quaderFlaecheX5(5)(5));
})();
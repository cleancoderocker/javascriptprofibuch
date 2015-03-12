function volumen(x, y, z) {
    return x * y * z;
}
var _ = {}; // Platzhalter
function partialMitPlatzhaltern(funktion /*, parameter...*/) {
    var parameterGebunden = Array.prototype.slice.call(arguments, 1);
    return function() {
        var i,
            parameter = [],
            parameterUngebunden = Array.prototype.slice.call(arguments, 0);
        for(i=0; i<parameterGebunden.length; i++) {
            if(parameterGebunden[i] !== _) {
                parameter[i] = parameterGebunden[i];
            } else {
                parameter[i] = parameterUngebunden.shift();
            }
        }
        return funktion.apply(this, parameter.concat(parameterUngebunden));
    };
};
var volumenY5 = partialMitPlatzhaltern(volumen, _, 5);
console.log(volumenY5(2, 2)); // 20
console.log(volumenY5(3, 3)); // 45
console.log(volumenY5(4, 4)); // 80
console.log(volumenY5(5, 5)); // 125
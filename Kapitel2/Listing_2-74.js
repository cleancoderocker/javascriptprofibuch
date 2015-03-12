function volumen(x, y, z) {
    return x * y * z;
}
function partialRight(funktion /*, parameter...*/) {
    var parameterGebunden = Array.prototype.slice.call(arguments, 1);
    return function() {
        var parameterUngebunden = Array.prototype.slice.call(arguments);
        return funktion.apply(this, parameterUngebunden.concat(parameterGebunden));
    };
}
var volumenZ5 = partialRight(volumen, 5);
console.log(volumenZ5(2, 2)); // 20
console.log(volumenZ5(3, 3)); // 45
console.log(volumenZ5(4, 4)); // 80
console.log(volumenZ5(5, 5)); // 125
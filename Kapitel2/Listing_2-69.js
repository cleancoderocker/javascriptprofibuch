function volumen(x, y, z) {
    return x * y * z;
}
function partial(funktion /*, parameter...*/) {
    var parameterGebunden = Array.prototype.slice.call(arguments, 1);
    return function() {
        var parameterUngebunden = Array.prototype.slice.call(arguments, 0);
        return funktion.apply(this, parameterGebunden.concat(parameterUngebunden));
    };
}
var volumenX5 = partial(volumen, 5);
var volumenX5Y5 = partial(volumen, 5, 5);
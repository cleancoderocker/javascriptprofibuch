function partialRight(funktion /*, parameter...*/) {
    var parameterGebunden = Array.prototype.slice.call(arguments, 1);
    return function() {
        var parameterUngebunden = Array.prototype.slice.call(arguments);
        return funktion.apply(this, parameterUngebunden.concat(parameterGebunden));
    };
}
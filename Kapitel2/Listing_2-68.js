function partial(funktion /*, parameter...*/) {
    var parameterGebunden = Array.prototype.slice.call(arguments, 1);
    return function() {
        var parameterUngebunden = Array.prototype.slice.call(arguments, 0);
        return funktion.apply(this, parameterGebunden.concat(parameterUngebunden));
    };
}
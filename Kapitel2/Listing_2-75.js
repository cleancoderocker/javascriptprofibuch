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
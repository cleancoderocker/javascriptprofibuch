function partial(funktion, ...parameterGebunden) {
    return function (...parameterUngebunden) {
        return funktion(...parameterGebunden, ...parameterUngebunden);
    };
}
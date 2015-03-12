function volumen(x, y, z) {
    return x * y * z;
}
function volumenFabrik() {
    var parameterGebunden = Array.prototype.slice.call(arguments, 0);
    console.log(parameterGebunden); // im Beispiel: [2, 4]
    return function() {
        var parameterUngebunden = Array.prototype.slice.call(arguments, 0);
        console.log(parameterUngebunden); // im Beispiel: [5]
        var alleParameter = parameterGebunden.concat(parameterUngebunden);
        console.log(alleParameter); // im Beispiel: [2, 4, 5]
        return volumen.apply(this, alleParameter);
    };
}
var volumenX2Y4 = volumenFabrik(2, 4);
console.log(volumenX2Y4(5));
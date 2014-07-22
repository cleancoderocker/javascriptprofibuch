// Imperative Vorgehensweise
(function() {

    function volumen(x, y, z) {
        return x * y * z;
    }
    var volumenX = 5;
    console.log(volumen(volumenX, 2, 2));
    console.log(volumen(volumenX, 3, 3));
    console.log(volumen(volumenX, 4, 4));
    console.log(volumen(volumenX, 5, 5));

})();

// Funktionale Vorgehensweise
(function() {

    function volumen(x, y, z) {
        return x * y * z;
    }
    function volumenX5(y, z) {
        return volumen(5, y, z);
    }
    console.log(volumenX5(2, 2));
    console.log(volumenX5(3, 3));
    console.log(volumenX5(4, 4));
    console.log(volumenX5(5, 5));


})();

// Allgemeinere funktionale Vorgehensweise
(function() {

    function volumen(x, y, z) {
        return x * y * z;
    }

    function volumenX(x) {
        return function(y, z) {
            return volumen(x, y, z);
        }
    }

    var volumenX5 = volumenX(5);
    console.log(volumenX5(2, 2));
    console.log(volumenX5(3, 3));
    console.log(volumenX5(4, 4));
    console.log(volumenX5(5, 5));

})();

// Allgemeinere funktionale Vorgehensweise für mehrere Parameter
(function() {

    function volumen(x, y, z) {
        return x * y * z;
    }

    function volumenFabrik() {
        var parameterGebunden = Array.prototype.slice.call(arguments, 0);
        return function() {
            var parameterUngebunden = Array.prototype.slice.call(arguments, 0);
            var alleParameter = parameterGebunden.concat(parameterUngebunden);
            return volumen.apply(this, alleParameter);
        };
    }

    var volumenX2Y4 = volumenFabrik(2, 4);

    console.log(volumenX2Y4(5));

})();
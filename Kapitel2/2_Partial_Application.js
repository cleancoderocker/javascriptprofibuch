// Imperative Vorgehensweise
(function() {

    function quaderFlaeche(x, y, z) {
        return x * y * z;
    }

    var quaderX = 5;

    console.log(quaderFlaeche(quaderX, 2, 2));
    console.log(quaderFlaeche(quaderX, 3, 3));
    console.log(quaderFlaeche(quaderX, 4, 4));
    console.log(quaderFlaeche(quaderX, 5, 5));

})();

// Funktionale Vorgehensweise
(function() {

    function quaderFlaeche(x, y, z) {
        return x * y * z;
    }

    function quaderFlaecheX5(y, z) {
        return quaderFlaeche(5, y, z);
    }

    console.log(quaderFlaecheX5(2, 2));
    console.log(quaderFlaecheX5(3, 3));
    console.log(quaderFlaecheX5(4, 4));
    console.log(quaderFlaecheX5(5, 5));

})();

// Allgemeinere funktionale Vorgehensweise
(function() {

    function quaderFlaeche(x, y, z) {
        return x * y * z;
    }

    function quaderFlaecheX(x) {
        return function(y, z) {
            return quaderFlaeche(x, y, z);
        }
    }

    var quaderFlaecheX5 = quaderFlaecheX(5);

    console.log(quaderFlaecheX5(2, 2));
    console.log(quaderFlaecheX5(3, 3));
    console.log(quaderFlaecheX5(4, 4));
    console.log(quaderFlaecheX5(5, 5));

})();

// Allgemeinere funktionale Vorgehensweise für mehrere Parameter
(function() {

    function quaderFlaeche(x, y, z) {
        return x * y * z;
    }

    function quaderFlaecheFabrik() {
        var parameterGebunden = Array.prototype.slice.call(arguments);
        return function() {
            var parameterUngebunden = Array.prototype.slice.call(arguments);
            var alleParameter = parameterGebunden.concat(parameterUngebunden);
            return quaderFlaeche.apply(this, alleParameter);
        };
    }

    var quaderFlaecheX2Y2 = quaderFlaecheFabrik(2, 2);

    console.log(quaderFlaecheX2Y2(2));
    console.log(quaderFlaecheX2Y2(3));
    console.log(quaderFlaecheX2Y2(4));
    console.log(quaderFlaecheX2Y2(5));

})();
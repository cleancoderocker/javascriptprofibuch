// Partielle Auswertung von links
console.log("Partielle Auswertung von links");
(function() {

    function partial(funktion /*, parameter...*/) {
        var parameterGebunden = Array.prototype.slice.call(arguments, 1);
        return function() {
            return funktion.apply(this, parameterGebunden.concat(Array.prototype.slice.call(arguments)));
        };
    }

    var quaderFlaeche = function(x, y, z) {
        return x * y * z;
    }

    var quaderFlaecheX5 = partial(quaderFlaeche, 5);

    console.log(quaderFlaecheX5(2, 2));
    console.log(quaderFlaecheX5(3, 3));
    console.log(quaderFlaecheX5(4, 4));
    console.log(quaderFlaecheX5(5, 5));

    var quaderFlaecheX5Y5 = partial(quaderFlaeche, 5, 5);
    console.log(quaderFlaecheX5Y5(5));
})();

// Partielle Auswertung von links
console.log("Partielle Auswertung von links");
(function() {

    function partial(funktion /*, parameter...*/) {
        var parameterGebunden = Array.prototype.slice.call(arguments, 1);
        return function() {
            var parameterUngebunden = Array.prototype.slice.call(arguments);
            return funktion.apply(this, parameterGebunden.concat(parameterUngebunden));
        };
    }

    function quaderFlaeche(x, y, z) {
        return x * y * z;
    }

    var quaderFlaecheX5 = partial(quaderFlaeche, 5);

    console.log(quaderFlaecheX5(2, 2));
    console.log(quaderFlaecheX5(3, 3));
    console.log(quaderFlaecheX5(4, 4));
    console.log(quaderFlaecheX5(5, 5));

    var quaderFlaecheX5Y5 = partial(quaderFlaeche, 5, 5);
    console.log(quaderFlaecheX5Y5(5));

    function erstellePerson(name, vorname) {
        return {
            name: name,
            vorname: vorname
        }
    }

    var erstelleMustermann = partial(erstellePerson, 'Mustermann');
    console.log(erstelleMustermann('Max'));
    console.log(erstelleMustermann('Moritz'));
})();

// Partielle Auswertung von links mit ES6
/*
console.log("Partielle Auswertung von links mit ES6");
(function() {

    function partial(funktion, ...parameterGebunden) {
        return function (...parameterUngebunden) {
            return funktion([...parameterGebunden, ...parameterUngebunden]);
        };
    }

    function quaderFlaeche(x, y, z) {
        return x * y * z;
    }

    var quaderFlaecheX5 = partial(quaderFlaeche, 5);

    console.log(quaderFlaecheX5(2, 2));
    console.log(quaderFlaecheX5(3, 3));
    console.log(quaderFlaecheX5(4, 4));
    console.log(quaderFlaecheX5(5, 5));

    var quaderFlaecheX5Y5 = partial(quaderFlaeche, 5, 5);
    console.log(quaderFlaecheX5Y5(5));

    function erstellePerson(name, vorname) {
        return {
            name: name,
            vorname: vorname
        }
    }

    var erstelleMustermann = partial(erstellePerson, 'Mustermann');
    console.log(erstelleMustermann('Max'));
    console.log(erstelleMustermann('Moritz'));
})();
*/

// Partielle Auswertung von rechts
console.log("Partielle Auswertung von rechts");
(function() {

    function partialRight(funktion /*, parameter...*/) {
        var parameterGebunden = Array.prototype.slice.call(arguments, 1);
        return function() {
            var parameterUngebunden = Array.prototype.slice.call(arguments);
            return funktion.apply(this, parameterUngebunden.concat(parameterGebunden));
        };
    }

    function quaderFlaeche(x, y, z) {
        console.log("x: " + x + ", y: " + y + ", z: " + z);
        return x * y * z;
    }

    var quaderFlaecheZ5 = partialRight(quaderFlaeche, 5);

    console.log(quaderFlaecheZ5(2, 2));
    console.log(quaderFlaecheZ5(3, 3));
    console.log(quaderFlaecheZ5(4, 4));
    console.log(quaderFlaecheZ5(5, 5));

})();

// Partielle Auswertung für beliebige Parameter
console.log("Partielle Auswertung für beliebige Parameter");
(function() {

    var _ = {};
    function partialMitPlatzhaltern(funktion /*, parameter...*/) {
        var parameterGebunden = Array.prototype.slice.call(arguments, 1);
        return function() {
            var i = 0,
                parameter = [],
                parameterUngebunden = Array.prototype.slice.call(arguments);
            for(; i<parameterGebunden.length; i++) {
                if(parameterGebunden[i] !== _) {
                    parameter[i] = parameterGebunden[i];
                } else {
                    parameter[i] = parameterUngebunden.shift();
                }
            }
            return funktion.apply(this, parameter.concat(parameterUngebunden));
        };
    };

    function quaderFlaeche(x, y, z) {
        console.log("x: " + x + ", y: " + y + ", z: " + z);
        return x * y * z;
    }

    var quaderFlaecheY5 = partialMitPlatzhaltern(quaderFlaeche, _, 5);

    console.log(quaderFlaecheY5(2, 2));
    console.log(quaderFlaecheY5(3, 3));
    console.log(quaderFlaecheY5(4, 4));
    console.log(quaderFlaecheY5(5, 5));

})();

// Partielle Auswertung für beliebige Parameter mit IIFE
console.log("Partielle Auswertung für beliebige Parameter mit IIFE");
(function() {

    var partialMitPlatzhaltern = (function() {
        function partial(funktion /*, parameter...*/) {
            var parameterGebunden = Array.prototype.slice.call(arguments, 1);
            return function() {
                var i = 0,
                    parameter = [],
                    parameterUngebunden = Array.prototype.slice.call(arguments);
                for(; i<parameterGebunden.length; i++) {
                    if(parameterGebunden[i] !== partial._) {
                        parameter[i] = parameterGebunden[i];
                    } else {
                        parameter[i] = parameterUngebunden.shift();
                    }
                }
                return funktion.apply(this, parameter.concat(parameterUngebunden));
            };
        };
        partial._ = {};
        return partial;
    })();

    function quaderFlaeche(x, y, z) {
        console.log("x: " + x + ", y: " + y + ", z: " + z);
        return x * y * z;
    }

    var quaderFlaecheZ5 = partialMitPlatzhaltern(quaderFlaeche, partialMitPlatzhaltern._, 5);

    console.log(quaderFlaecheZ5(2, 2));
    console.log(quaderFlaecheZ5(3, 3));
    console.log(quaderFlaecheZ5(4, 4));
    console.log(quaderFlaecheZ5(5, 5));

})();

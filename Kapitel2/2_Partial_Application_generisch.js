// Partielle Auswertung von links
console.log("Partielle Auswertung von links");
(function() {

    function partial(funktion /*, parameter...*/) {
        var parameterGebunden = Array.prototype.slice.call(arguments, 1);
        return function() {
            return funktion.apply(this, parameterGebunden.concat(Array.prototype.slice.call(arguments)));
        };
    }

    var volumen = function(x, y, z) {
        return x * y * z;
    }

    var volumenX5 = partial(volumen, 5);

    console.log(volumenX5(2, 2));
    console.log(volumenX5(3, 3));
    console.log(volumenX5(4, 4));
    console.log(volumenX5(5, 5));

    var volumenX5Y5 = partial(volumen, 5, 5);
    console.log(volumenX5Y5(5));
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

    function volumen(x, y, z) {
        return x * y * z;
    }

    var volumenX5 = partial(volumen, 5);

    console.log(volumenX5(2, 2));
    console.log(volumenX5(3, 3));
    console.log(volumenX5(4, 4));
    console.log(volumenX5(5, 5));

    var volumenX5Y5 = partial(volumen, 5, 5);
    console.log(volumenX5Y5(5));

    function erstellePerson(name, vorname) {
        return {
            name: name,
            vorname: vorname
        }
    }

    var erstelleMustermann = partial(erstellePerson, 'Mustermann');
    var max = erstelleMustermann('Max');
    console.log(max); // { name: 'Mustermann', vorname: 'Max' }
    var moritz = erstelleMustermann('Moritz');
    console.log(moritz); // { name: 'Mustermann', vorname: 'Moritz' }

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

    function volumen(x, y, z) {
        return x * y * z;
    }

    var volumenX5 = partial(volumen, 5);

    console.log(volumenX5(2, 2));
    console.log(volumenX5(3, 3));
    console.log(volumenX5(4, 4));
    console.log(volumenX5(5, 5));

    var volumenX5Y5 = partial(volumen, 5, 5);
    console.log(volumenX5Y5(5));

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

    function volumen(x, y, z) {
        console.log("x: " + x + ", y: " + y + ", z: " + z);
        return x * y * z;
    }

    var volumenZ5 = partialRight(volumen, 5);

    console.log(volumenZ5(2, 2));
    console.log(volumenZ5(3, 3));
    console.log(volumenZ5(4, 4));
    console.log(volumenZ5(5, 5));

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

    function volumen(x, y, z) {
        console.log("x: " + x + ", y: " + y + ", z: " + z);
        return x * y * z;
    }

    var volumenY5 = partialMitPlatzhaltern(volumen, _, 5);

    console.log(volumenY5(2, 2));
    console.log(volumenY5(3, 3));
    console.log(volumenY5(4, 4));
    console.log(volumenY5(5, 5));

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

    function volumen(x, y, z) {
        console.log("x: " + x + ", y: " + y + ", z: " + z);
        return x * y * z;
    }

    var volumenZ5 = partialMitPlatzhaltern(volumen, partialMitPlatzhaltern._, 5);

    console.log(volumenZ5(2, 2));
    console.log(volumenZ5(3, 3));
    console.log(volumenZ5(4, 4));
    console.log(volumenZ5(5, 5));

})();

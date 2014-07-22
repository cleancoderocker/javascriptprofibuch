(function() {

    var komposition1 = function(f, g) {
        return function(x) {
            return f(g(x));
        };
    };

    var komposition2 = function(f, g) {
        return function() {
            return f.call(this, g.apply(this, arguments));
        };
    };

    var komposition3 = function() {
        var funktionen = arguments;
        return function() {
            var args = arguments;
            for (var i = funktionen.length; i --> 0;) {
                args = [funktionen[i].apply(this, args)];
            }
            return args[0];
        };
    };

    function plusVier(x) {
        return x + 4;
    }

    function malVier(x) {
        return x * 4;
    }

    function malSieben(x) {
        return x * 7;
    }

    function quadrat(x) {
        return x * x;
    }

    var plusVierMalSieben = komposition2(malSieben, plusVier);

    console.log(plusVierMalSieben(2));
    console.log(malSieben(plusVier(2)));


    var plusAchtMalSieben = komposition3(malSieben, plusVier, plusVier);
    console.log(plusAchtMalSieben(2));


    var interpret = {
        name: "Nick Cave",
        alben: [
            {
                titel: "Push the Sky Away",
                erscheinungsjahr: 2013
            },
            {
                titel: "No more shall we part",
                erscheinungsjahr: 2001
            }
        ]
    };

    function loggeNamen(interpret) {
        console.log(interpret.name);
        return interpret;
    }

    function loggeAlben(interpret) {
        interpret.alben.forEach(function(album) {
            console.log(album)
        });
        return interpret;
    }

    var loggeNamenUndAlben = komposition2(loggeAlben, loggeNamen);
    loggeNamenUndAlben(interpret);

})();
/*
 * Zwei Callback-Funktionen mit jeweils einem Parameter
 */

(function() {

    function asynchroneFunktion(success, error) {
        setTimeout(function() {
            var ergebnis = 4711; // Hier normalerweise mehr Code
            if(ergebnis < 0) {
                error(new Error("Ergebnis kleiner 0"));
            } else {
                success(ergebnis);
            }
        }, 2000);
    }

    asynchroneFunktion(
        function(ergebnis) {
            console.log(ergebnis);
        },
        function(fehler) {
            console.error(fehler);
        }
    );

})();

/*
 * Eine Callback-Funktion mit zwei Parametern
 */

(function() {

    function asynchroneFunktion(callback) {
        setTimeout(function() {
            var ergebnis = 4711; // Hier normalerweise mehr Code
            if(ergebnis < 0) {
                callback(new Error("Ergebnis kleiner 0"), ergebnis);
            } else {
                callback(null, ergebnis);
            }
        }, 2000);
    }

    asynchroneFunktion(
        function(fehler, ergebnis) {
            if(fehler) {
                console.error(fehler);
            } else {
                console.log(ergebnis);
            }
        }
    );

})();


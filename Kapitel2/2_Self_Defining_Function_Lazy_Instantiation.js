(function() {

    function init() {
        console.log("init()");
        return "Ergebnis";
    }

    function getErgebnis() {
        var ergebnis = init(); // Hier die einmalige Berechnung
        getErgebnis = function() {
            return ergebnis;
        }
        return ergebnis;
    }

    console.log(getErgebnis()); // Ausgabe: "init()", dann "Ergebnis"
    console.log(getErgebnis()); // Ausgabe: "Ergebnis"
    console.log(getErgebnis()); // Ausgabe: "Ergebnis"
    console.log(getErgebnis()); // Ausgabe: "Ergebnis"

})();
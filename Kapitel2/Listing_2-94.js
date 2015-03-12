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
    function(ergebnis) { // anonyme Implementierung von success
        console.log(ergebnis);
    },
    function(fehler) { // anonyme Implementierung von error
        console.error(fehler);
    }
);
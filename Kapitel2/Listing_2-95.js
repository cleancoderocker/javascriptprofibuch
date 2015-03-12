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
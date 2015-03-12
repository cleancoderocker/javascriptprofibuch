function summePerCallback(x, y, callback) {
    var ergebnis = x + y;
    if(typeof callback === "function") {
        callback(ergebnis);
    }
}
summePerCallback(2, 2, function(ergebnis) {
    console.log("Das Ergebnis lautet: " + ergebnis)
});
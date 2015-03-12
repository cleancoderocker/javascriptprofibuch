function eineFunktion(callback) {
    if(typeof callback === "function") {
        callback();
    } else {
// Fehlerbehandlung
    }
}
eineFunktion(function() {
    console.log("anonyme Funktion");
});
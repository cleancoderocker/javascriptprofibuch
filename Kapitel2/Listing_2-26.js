function addiere(x, y, config) {
    let ergebnis = x + y;
    if(config && config.log) {
        console.log(ergebnis);
    }
    return ergebnis;
}
addiere(2,2);                // Aufruf ohne Logging
addiere(2,2,{ log: true });  // Aufruf mit Logging

function addiere(x, y, log) {
    let ergebnis = x + y;
    if(log) {
        console.log(ergebnis);
    }
    return ergebnis;
}
addiere(2,2);       // Aufruf ohne Logging
addiere(2,2,true);  // Aufruf mit Logging

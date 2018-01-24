function addiere(x, y) {
    let ergebnis = x + y;
    if(arguments[2]) { // Zugriff auf den optionalen Parameter
        console.log(ergebnis);
    }
    return ergebnis;
}
addiere(2,2);       // Aufruf ohne Logging
addiere(2,2,true);  // Aufruf mit Logging

function addiere(x, y) {
    var ergebnis = x + y;
    if(arguments[2]) { // Zugriff auf den optionalen Parameter
        console.log(ergebnis);
    }
    return ergebnis;
}
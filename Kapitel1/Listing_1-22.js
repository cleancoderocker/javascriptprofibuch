function addiereAlle() {
    var ergebnis = 0;
    for(var i=0; i<arguments.length; i++) {
        ergebnis += arguments[i];
    }
    return ergebnis;
}
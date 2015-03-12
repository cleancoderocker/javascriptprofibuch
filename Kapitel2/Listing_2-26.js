function addiere(x, y, config) {
    var ergebnis = x + y;
    if(config && config.log) {
        console.log(ergebnis);
    }
    return ergebnis;
}
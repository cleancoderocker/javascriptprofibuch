function* zaehler() {
    var zaehler = 0;
    while(true) {
        zaehler++;
        var vonVorne = yield zaehler;
        if(vonVorne === true) {
            zaehler = 0;
        }
    }
}
var zaehlerInstanz = zaehler();
zaehlerInstanz.next(); // {done: false, value: 1}
zaehlerInstanz.next(); // {done: false, value: 2}
zaehlerInstanz.next(); // {done: false, value: 3}
zaehlerInstanz.next(); // {done: false, value: 4}
zaehlerInstanz.next(true); // {done: false, value: 1}
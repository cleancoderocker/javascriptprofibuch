function* zaehler() {
    var zaehler = 0;
    while(true) {
        zaehler++;
        yield zaehler;
    }
}
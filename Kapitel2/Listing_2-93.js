function asynchroneFunktion() {
    var x;
    setTimeout(function() {
        throw new Error('Testfehler');
        x = 4711;
    }, Math.random() * 2000);
    return x;
}
try {
    var ergebnis = asynchroneFunktion();
} catch(fehler) {
    console.error("Fehler: " + fehler); // Das wird nicht aufgerufen
}
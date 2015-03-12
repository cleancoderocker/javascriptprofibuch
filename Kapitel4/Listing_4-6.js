function test() {
    var ergebnis = [];
    for(var i=1; i<11; i++) {
        var zahl = i;
        ergebnis[i] = (function(zahl2) {
            return function() {
                return zahl2;
            };
        })(zahl);
    }
    ergebnis.forEach(function(zahlFunktion) {
        console.log(zahlFunktion());
    });
}
test();
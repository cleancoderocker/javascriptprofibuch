casper.test.begin('Heise Homepage', 1, function suite(test) {
    casper.start("http://www.heise.de/", function () {
        var ueberschriften = casper.evaluate(function () {
            var h2s = document.getElementsByTagName("h2");
            var ergebnis = new Array();
            for (var i = 0; i < h2s.length; i++) {
                ergebnis[i] = h2s[i].textContent;
            }
            return ergebnis;
        });
        test.assertEquals(ueberschriften.length, 6,
            "hat die richtige Anzahl an Überschriften der Ebene 2");
    });
    casper.run(function () {
        test.done();
    });
});

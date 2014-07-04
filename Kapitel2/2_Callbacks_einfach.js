(function() {

    function eineFunktion(callback) {
        if(typeof callback === "function") {
            callback();
        }
    }

    function nochEineFunktion() {
        console.log("nochEineFunktion")
    }

    eineFunktion({}); // Callback wird nicht aufgerufen

    eineFunktion("ein String"); // Callback wird nicht aufgerufen

    eineFunktion(nochEineFunktion);

    eineFunktion(function() {
        console.log("anonyme Funktion");
    })

})();

(function() {

    function summePerCallback(x, y, callback) {
        var ergebnis = x + y;
        if(typeof callback === "function") {
            callback(ergebnis);
        }
    }

    summePerCallback(2, 2, function(ergebnis) {
        console.log("Das Ergebnis lautet: " + ergebnis)
    });

})();

(function() {

    function asynchroneFunktion() {
        setTimeout(function() {
            console.log("B");
        }, 2000);
    }

    console.log("A");
    asynchroneFunktion();
    console.log("C");

})();
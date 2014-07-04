function asynchroneFunktion1(callback) {
    setTimeout(function() {
        callback("asynchroneFunktion1");
    }, 2000);
}
function asynchroneFunktion2(callback) {
    setTimeout(function() {
        callback("asynchroneFunktion2");
    }, 2000);
}

asynchroneFunktion1(function(ergebnis) {
    console.log(ergebnis);
    asynchroneFunktion2(function(ergebnis) {
        console.log(ergebnis);
    });
});

function* siehtAusWieSynchron() {
    var ergebnis = yield asynchroneFunktion1(function() {});
    console.log(ergebnis);
    ergebnis = yield asynchroneFunktion2(function() {});
    console.log(ergebnis);
}

function* siehtAusWieSynchron(callback) {
    var ergebnis = yield asynchroneFunktion1(callback);
    console.log(ergebnis);
    ergebnis = yield asynchroneFunktion2(callback);
    console.log(ergebnis);
}

function start(generatorFunktion) {
    var generator = generatorFunktion(callback);
    function callback(ergebnis) {
        generator.next(ergebnis);
    }
    generator.next();
}

start(function* siehtAusWieSynchron(callback) {
    var ergebnis = yield asynchroneFunktion1(callback);
    console.log(ergebnis);
    ergebnis = yield asynchroneFunktion2(callback);
    console.log(ergebnis);
});



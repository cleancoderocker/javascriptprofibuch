function asynchroneFunktion() {
    var x;
    setTimeout(function() {
        x = 4711; // Das hier passiert erst nach zwei Sekunden
        console.log(x);
    }, Math.random() * 2000);
    return x;
}
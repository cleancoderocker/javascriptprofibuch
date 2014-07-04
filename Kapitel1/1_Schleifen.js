(function() {
    var zahlen = [ 5, 6, 7, 8, 9];
    zahlen.name = "Ein Zahlenarray"
    for (var eigenschaft in zahlen) {
        console.log(eigenschaft); // Ausgabe: 0, 1, 2, 3, 4, name
    }

    for (var eigenschaft of zahlen) {
        console.log(eigenschaft); // Ausgabe: 0, 1, 2, 3, 4, name
    }
})();
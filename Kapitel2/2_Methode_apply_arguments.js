(function() {

    function gebeNamenAus() {
        console.log(arguments); // Ausgabe: { '0': 'Max', '1': 'Moritz' }
        /* Fehler: arguments ist kein Array
        arguments.forEach(function(argument) {
            console.log(argument);
        });
        */
        var parameter = Array.prototype.slice.call(arguments, 0);
        parameter.forEach(function(parameter) {
            console.log(parameter);
        });
    }

    gebeNamenAus('Max', 'Moritz');

})();
(function() {

    function addition(x,y) {
        return x+y;
    }
    function subtraktion(x,y) {
        return x-y;
    }
    function multiplikation(x,y) {
        return x*y;
    }
    function division(x,y) {
        return x/y;
    }

    function operationsDecorator(operation, x, y) {
        console.log('Starte Operation');
        var ergebnis = operation(x, y);
        console.log('Ergebnis: ' + ergebnis);
        return ergebnis;
    }

    console.log(operationsDecorator(addition, 2, 2));
    console.log(operationsDecorator(subtraktion, 2, 2));
    console.log(operationsDecorator(multiplikation, 2, 2));
    console.log(operationsDecorator(division, 2, 2));

})();
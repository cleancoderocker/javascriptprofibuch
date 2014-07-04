(function() {

    function operationenContainer(x, y) {
        function addition(x, y) {
            return x + y;
        }
        function subtraktion(x, y) {
            return x - y;
        }
        function multiplikation(x, y) {
            return x * y;
        }
        function division(x, y) {
            return x / y;
        }
        console.log(addition(x, y));
        console.log(subtraktion(x, y));
        console.log(multiplikation(x, y));
        console.log(division(x, y));
    }

    operationenContainer(2,2);

})();


(function() {

    function operationenContainer(x, y) {
        var addition = function(x, y) {
            return x + y;
        }
        var subtraktion = function(x, y) {
            return x - y;
        }
        var multiplikation = function(x, y) {
            return x * y;
        }
        var division = function(x, y) {
            return x / y;
        }
        console.log(addition(x, y));
        console.log(subtraktion(x, y));
        console.log(multiplikation(x, y));
        console.log(division(x, y));
    }

    operationenContainer(2,2);

})();
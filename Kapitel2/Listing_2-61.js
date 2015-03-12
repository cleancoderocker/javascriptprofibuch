var fibonacciMitCache = function() {
    var cache = [0, 1];
    var fibonacci = function(n) {
        var result = cache[n];
        if (typeof result !== 'number') {
            console.log('Neuberechnung für: ' + n)
            result = fibonacci(n - 1) + fibonacci(n - 2);
            cache[n] = result;
        }
        return result;
    };
    return fibonacci;
};
var fibonacci = fibonacciMitCache();
console.log(fibonacci(11));
console.log(fibonacci(11));
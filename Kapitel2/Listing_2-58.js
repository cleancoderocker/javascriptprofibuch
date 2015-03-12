var fibonacciRekursiv = function(n) {
    return n < 2 ? n : fibonacciRekursiv(n - 1) + fibonacciRekursiv(n - 2);
};
console.log(fibonacciRekursiv(11)); // 89
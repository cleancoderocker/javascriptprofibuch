const fibonacciWithCache = function() {
  const cache = [0, 1];
  const fibonacci = function(n) {
    let result = cache[n];
    if (typeof result !== 'number') {
      console.log('Neuberechnung für: ' + n);
      result = fibonacci(n - 1) + fibonacci(n - 2);
      cache[n] = result;
    }
    return result;
  };
  return fibonacci;
};
const fibonacci = fibonacciWithCache();
console.log(fibonacci(11));
console.log(fibonacci(11));

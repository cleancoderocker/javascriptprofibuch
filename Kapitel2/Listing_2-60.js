function fibonacciImperative(n) {
  const fibonacciNumbers = new Array();
  fibonacciNumbers.push(0);
  fibonacciNumbers.push(1);
  for (let i = 0; i < n; i++) {
    fibonacciNumbers.push(fibonacciNumbers[0] + fibonacciNumbers[1]);
    fibonacciNumbers.shift();
  }
  return fibonacciNumbers[0];
}
console.log(fibonacciImperative(11)); // 89

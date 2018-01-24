function fibonacciImperativ(n){
  let i = 0;
  const fibonacciZahlen = new Array();
  fibonacciZahlen.push(0);
  fibonacciZahlen.push(1);
  for(i=0; i<n; i++){
    fibonacciZahlen.push(fibonacciZahlen[0] + fibonacciZahlen[1]);
    fibonacciZahlen.shift();
  }
  return fibonacciZahlen[0];
}
console.log(fibonacciImperativ(11)); // 89

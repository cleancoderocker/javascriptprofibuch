function* yieldOneThenTwo() {
  yield 1;
  yield 2;
}

const generator = yieldOneThenTwo();
let result = generator.next();
console.log(result); // {done: false, value: 1}
result = generator.next();
console.log(result); // {done: false, value: 2}
result = generator.next();
console.log(result); // {done: true, value: undefined}

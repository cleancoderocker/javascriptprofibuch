function* yieldOneThenTwo() {
  yield 1;
  yield 2;
}

const generator = yieldOneThenTwo();
for (let value of generator) {
  console.log(value);
}

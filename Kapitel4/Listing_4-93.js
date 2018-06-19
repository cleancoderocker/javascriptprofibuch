function square() {
  return Array.from(arguments, number => number * number);
}
const squares = square(1, 2, 3, 4, 5, 6, 7, 8);
console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64]

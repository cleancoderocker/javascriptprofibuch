function add(x, y) {
  return x + y;
}
const operation = add;
const result = add(2, 2);
const result2 = operation(2, 2);
console.log(add.name); // Ausgabe: add
console.log(operation.name); // Ausgabe: add

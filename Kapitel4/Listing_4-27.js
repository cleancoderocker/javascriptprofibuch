function add(x, y, z) {
  return x + y + z;
}
const numbers = [2, 3, 4];
const result = add(...numbers);
console.log(result); // Ausgabe: 9

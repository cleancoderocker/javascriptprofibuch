function add(x, y, z) {
  return x + y + z;
}

var numbers = [2, 3, 4];
var result = add.apply(null, numbers);
console.log(result); // Ausgabe: 9

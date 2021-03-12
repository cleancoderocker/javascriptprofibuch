var map = {};
map['Schlüssel 1'] = 'Wert 1';
map['Schlüssel 2'] = 'Wert 2';
var value1 = map['Schlüssel 1'];
var value2 = map['Schlüssel 2'];
console.log(value1); // Wert 1
console.log(value2); // Wert 2
for (var key in map) {
  if (map.hasOwnProperty(key)) {
    console.log(key);
  }
}

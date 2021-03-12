const map = new Map();
map.set('Schlüssel 1', 'Wert 1');
map.set('Schlüssel 2', 'Wert 2');
for (const [key, value] of map) {
  console.log(key + ': ' + value);
}
// Ausgabe:
// Schlüssel 1: Wert 1
// Schlüssel 2: Wert 2

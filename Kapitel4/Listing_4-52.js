const map = new Map();
map.set('Schlüssel 1', 'Wert 1');
map.set('Schlüssel 2', 'Wert 2');
for (let entry of map) {
  const key = eintrag[0];
  const value = eintrag[1];
  console.log(key + ': ' + value);
}
// Ausgabe:
// Schlüssel 1: Wert 1
// Schlüssel 2: Wert 2

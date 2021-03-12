const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const keyIterator = numbers.keys();
let key = keyIterator.next();
// Ausgabe hintereinander: 0, 1, 2, 3, 4, 5, 6, 7
while (!key.done) {
  console.log(key.value);
  key = keyIterator.next();
}
const valueIterator = numbers.values();
let value = iterator.next();
// Ausgabe hintereinander: 1, 2, 3, 4, 5, 6, 7, 8
while (!value.done) {
  console.log(value.value);
  value = iterator.next();
}
const entryIterator = numbers.entries();
let entry = entryIterator.next();
// Ausgabe hintereinander: [0, 1], [1, 2], [2, 3],
// [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]
while (!entry.done) {
  console.log(entry.value);
  entry = entryIterator.next();
}

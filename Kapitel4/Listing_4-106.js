const numbers = [1, 2, 3, 4, 5];
numbers.name = 'Zahlen Eins bis Fünf';
// for-in-Schleife
for (let i in numbers) {
  console.log(i); // 0, 1, 2, 3, 4, name
}
// for-of-Schleife
for (let i of numbers) {
  console.log(i); // 1, 2, 3, 4, 5
}

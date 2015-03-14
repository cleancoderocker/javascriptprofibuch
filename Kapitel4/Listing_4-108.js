/* Funktioniert nur in ES6 */
let zahlen = [ 1, 2, 3, 4, 5 ];
zahlen.name = "Zahlen eins bis fünf";
// for-in-Schleife
for (let i in zahlen) {
    console.log(i); // 0, 1, 2, 3, 4, name
}
// for-of-Schleife
for (let i of zahlen) {
    console.log(i); // 1, 2, 3, 4, 5
}
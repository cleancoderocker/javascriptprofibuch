/* Funktioniert nur in ES6 */
var zahlen = [1, 2, 3, 4, 5, 6, 7, 8];
var geradeZahlen = zahlen.filter(function(element) {
    return element % 2 === 0;
});
console.log(geradeZahlen); // [2, 4, 6, 8]
var ersteGeradeZahl = zahlen.find(function(element) {
    return element % 2 === 0;
});
console.log(ersteGeradeZahl); // 2
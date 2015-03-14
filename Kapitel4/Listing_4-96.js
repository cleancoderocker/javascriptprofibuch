/* Funktioniert nur in ES6 */
function quadrat() {
    return Array.from(arguments, function(element) {
        return element * element;
    });
}
var quadrate = quadrat(1, 2, 3, 4, 5, 6, 7, 8);
console.log(quadrate); // [1, 4, 9, 16, 25, 36, 49, 64]
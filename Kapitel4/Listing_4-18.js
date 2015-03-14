/* Funktioniert nur in ES6 */
var zahlen = [3,4,2,4,3,5,7,4,6,3,7,45,4,345,5435,5,534,545];
zahlen
    .filter(x => x < 5)
    .forEach(x => console.log(x));
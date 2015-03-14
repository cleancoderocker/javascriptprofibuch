(function () {
    /* Listing 7.31 */
    var Comparator = function () {
    };
    Comparator.prototype.compare = function (wert1, wert2) {
    };
    var AbsteigendComparator = function () {
    };
    AbsteigendComparator.prototype = Object.create(Comparator.prototype);
    AbsteigendComparator.prototype.compare = function (wert1, wert2) {
        return wert1 < wert2;
    }
    var AufsteigendComparator = function () {
    };
    AufsteigendComparator.prototype = Object.create(Comparator.prototype);
    AufsteigendComparator.prototype.compare = function (wert1, wert2) {
        return wert1 > wert2;
    }
    var absteigendComparator = new AbsteigendComparator();
    var aufsteigendComparator = new AufsteigendComparator();
    var array = [4, 5, 8, 3, 4, 2, 9, 4, 5];
    array.sort(absteigendComparator.compare);
    console.log(array);
    array.sort(aufsteigendComparator.compare);
    console.log(array);
})();

(function () {
    /* Listing 7.32 */
    var array = [4, 5, 8, 3, 4, 2, 9, 4, 5];
    var absteigendeSortierung = function (wert1, wert2) {
        return wert1 < wert2;
    };
    var aufsteigendeSortierung = function (wert1, wert2) {
        return wert1 > wert2;
    };
    array.sort(absteigendeSortierung);
    console.log(array);
    array.sort(aufsteigendeSortierung);
    console.log(array);
})();

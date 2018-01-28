(function () {
    var Comparator = function () {
    };
    Comparator.prototype.compare = function (value1, value2) {
    };
    var DescendingComparator = function () {
    };
    DescendingComparator.prototype = Object.create(Comparator.prototype);
    DescendingComparator.prototype.compare = function (value1, value2) {
        return value1 < value2;
    }
    var AscendingComparator = function () {
    };
    AscendingComparator.prototype = Object.create(Comparator.prototype);
    AscendingComparator.prototype.compare = function (value1, value2) {
        return value1 > value2;
    }
    var descendingComparator = new DescendingComparator();
    var ascendingComparator = new AscendingComparator();
    var array = [4, 5, 8, 3, 4, 2, 9, 4, 5];
    array.sort(descendingComparator.compare);
    console.log(array);
    array.sort(ascendingComparator.compare);
    console.log(array);
})();

(function () {
    var array = [4, 5, 8, 3, 4, 2, 9, 4, 5];
    var descendingSorting = function (value1, value2) {
        return value1 < value2;
    };
    var ascendingSorting = function (value1, value2) {
        return value1 > value2;
    };
    array.sort(descendingSorting);
    console.log(array);
    array.sort(ascendingSorting);
    console.log(array);
})();

(function () {

	class Comparator {

		compare (value1, value2) {
		}

	}

    class DescendingComparator extends Comparator {

		compare(value1, value2) {
			return value1 < value2;
		}

	}

    class AscendingComparator extends Comparator {

		compare(value1, value2) {
			return value1 > value2;
		}

	}

    const descendingComparator = new DescendingComparator();
    const ascendingComparator = new AscendingComparator();
    const array = [4, 5, 8, 3, 4, 2, 9, 4, 5];
    array.sort(descendingComparator.compare);
    console.log(array);
    array.sort(ascendingComparator.compare);
    console.log(array);
})();

(function () {
    const array = [4, 5, 8, 3, 4, 2, 9, 4, 5];
    const descendingSorting = (value1, value2) => value1 < value2;
    const ascendingSorting = (value1, value2) => value1 > value2;
    array.sort(descendingSorting);
    console.log(array);
    array.sort(ascendingSorting);
    console.log(array);
})();

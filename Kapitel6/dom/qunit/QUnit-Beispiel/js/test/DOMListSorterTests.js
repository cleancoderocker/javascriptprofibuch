test('DOMListSorter', function() {
    var list = document.querySelector('#qunit-fixture ul');
    DOMListSorter.sort(list);
    var items = Array.prototype.slice.call(list.querySelectorAll('li'));
    equal(items[0].textContent.trim(), 'Max Mustermann');
    equal(items[1].textContent.trim(), 'Moritz Mustermann');
    equal(items[2].textContent.trim(), 'Peter Mustermann');
    equal(items[3].textContent.trim(), 'Petra Mustermann');
});
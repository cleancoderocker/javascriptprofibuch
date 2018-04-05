QUnit.test('DOMListSorter', function(assert) {
    const list = document.querySelector('#qunit-fixture ul');
    DOMListSorter.sort(list);
    const items = Array.prototype.slice.call(list.querySelectorAll('li'));
    assert.equal(items[0].textContent.trim(), 'Max Mustermann');
    assert.equal(items[1].textContent.trim(), 'Moritz Mustermann');
    assert.equal(items[2].textContent.trim(), 'Peter Mustermann');
    assert.equal(items[3].textContent.trim(), 'Petra Mustermann');
});
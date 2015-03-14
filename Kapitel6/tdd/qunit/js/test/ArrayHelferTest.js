QUnit.module('ArrayHelferTest', {
    setup: function() {
        this.zahlen = [4,8,47,27,56,4,5];
    },
    zahlen : [],
    teardown: function() {
        this.zahlen = [];
    }
});

QUnit.test('Maximum eines Zahlenarrays', function(assert) {
    assert.equal(ArrayHelfer.max(this.zahlen), 56, 'Maximum in [4,8,47,27,56,4,5] ist 56');
});

QUnit.test('Minimum eines Zahlenarrays', function(assert) {
    assert.equal(ArrayHelfer.min(this.zahlen), 4, 'Minimum in [4,8,47,27,56,4,5] ist 4');
});
module('ArrayHelferTest', {
    setup: function() {
        this.zahlen = [4,8,47,27,56,4,5];
    },
    zahlen : [],
    teardown: function() {
        this.zahlen = [];
    }
});

test('Maximum eines Zahlenarrays', function() {
    equal(ArrayHelfer.max(this.zahlen), 56, 'Maximum in [4,8,47,27,56,4,5] ist 56');
});


QUnit.test('Maximum eines Zahlenarrays', (assert) => {
	const numbers = [4,8,47,27,56,4,5];
    assert.equal(ArrayHelper.max(numbers), 56, 'Maximum in [4,8,47,27,56,4,5] ist 56');
});

QUnit.test('Minimum eines Zahlenarrays', (assert) => {
	const numbers = [4,8,47,27,56,4,5];
    assert.equal(ArrayHelper.min(numbers), 4, 'Minimum in [4,8,47,27,56,4,5] ist 4');
});
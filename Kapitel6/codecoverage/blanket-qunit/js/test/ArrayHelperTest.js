QUnit.test('Maximum eines Zahlenarrays', (assert) => {
	const numbers = [4,8,47,27,56,4,5];
    assert.equal(ArrayHelper.max(numbers), 56, 'Maximum in [4,8,47,27,56,4,5] ist 56');
});

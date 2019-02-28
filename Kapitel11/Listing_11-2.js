const assert = require('assert');
const Calculator = require('../lib/Calculator');
describe('Calculator', () => {
  it('should calculate the sum', () => {
    let result = Calculator.sum(5, 6);
    assert.equal(result, 11);
  });
  it('should calculate the product', () => {
    let result = Calculator.product(5, 6);
    assert.equal(result, 30);
  });
});

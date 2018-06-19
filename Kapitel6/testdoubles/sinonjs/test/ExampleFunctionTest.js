const aFunction = require('../src/example').aFunction;
const assert = require('assert');
const sinon = require('../bower_components/sinon/lib/sinon');

describe('Function', () => {
    it('should call the callback', () => {
        let called = false;
        const callback = () => {
            called = true;
        }
        aFunction(callback);
        assert.equal(called, true);
    });
});

describe('Function', () => {
    it('should call the callback', () => {
        const spy = sinon.spy();
        aFunction(spy);
        assert.equal(spy.callCount, 1);
    });
});
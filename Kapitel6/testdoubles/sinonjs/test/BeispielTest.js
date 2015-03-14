var eineFunktion = require('../src/Beispiel').eineFunktion;
var assert = require('assert');
var sinon = require('../bower_components/sinon/lib/sinon');
describe('Function', function() {
    it('should call the callback', function(){
        var called = false;
        var callback = function() {
            called = true;
        }
        eineFunktion(callback);
        assert.equal(called, true);
    });
});
describe('Function', function() {
    it('should call the callback', function(){
        var spy = sinon.spy();
        eineFunktion(spy);
        assert.equal(spy.callCount, 1);
    });
});
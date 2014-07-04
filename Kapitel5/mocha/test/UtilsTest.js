/**
 * Created by philipackermann on 09.06.14.
 */
var addition = require('../../Utils');
var assert = require("assert")
describe('Utils', function() {
    describe('#addition()', function(){
        it('should add two parameters if both are greater or equal 0', function(){
            assert.equal(addition(2,2), 4);
        })
        it('should multiply the result by two if third parameter is true', function(){
            assert.equal(addition(2,2,true), 8);
        })
        it('should not multiply the result by two if third parameter is false', function(){
            assert.equal(addition(2,2,false), 4);
        })
    })
})
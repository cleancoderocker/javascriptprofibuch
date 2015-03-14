/**
 * Created by philipackermann on 26.10.14.
 */
var UserRepository = require('../src/UserRepository').UserRepository;
var WebService = require('../src/UserRepository').WebService;
var assert = require('assert');
var sinon = require('../bower_components/sinon/lib/sinon');
describe('UserRepository', function() {
    var userRepository;
    var expectation;
    before(function() {
        userRepository = new UserRepository();
        var mock = sinon.mock(WebService);
        expectation = mock.expects('listAllUsers').atMost(1);
    });
    describe('#listAllUsers()', function(){
        it('should only call web service once and cache the results', function(){
            var users = userRepository.listAllUsers();
            var users2 = userRepository.listAllUsers();
            expectation.verify();
        });
    });
});
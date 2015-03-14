/**
 * Created by philipackermann on 26.10.14.
 */
var UserRepository = require('../src/UserRepository').UserRepository;
var WebService = require('../src/UserRepository').WebService;
var assert = require('assert');
var sinon = require('../bower_components/sinon/lib/sinon');
describe('UserRepository', function() {
    var userRepository;
    var spy;
    before(function() {
        userRepository = new UserRepository();
        spy = sinon.spy(WebService, "listAllUsers");
    });
    after(function() {
        spy.restore();
    });
    describe('#listAllUsers()', function(){
        it('should only call web service once and cache the results', function(){
            var users = userRepository.listAllUsers();
            var users2 = userRepository.listAllUsers();
            assert.equal(spy.callCount, 1);
        });
    });
});
describe('UserRepository', function() {
    var userRepository;
    var stub;
    before(function() {
        userRepository = new UserRepository();
        stub = sinon.stub(userRepository, "listAllUsers");
        stub.returns([{
            name: 'Peter',
            lastname: 'Mustermann'
        }, {
            name: 'Max',
            lastname: 'Mustermann'
        }, {
            name: 'Moritz',
            lastname: 'Mustermann'
        }]);
    });
    after(function() {
        stub.restore();
    });
    describe('#filterUsers()', function(){
        it('should return users for given filter', function(){
            var users = userRepository.filterUsers(function(user) {
                return user.name.indexOf('M') === 0;
            });
            assert.equal(users.length, 2);
        });
    });
});
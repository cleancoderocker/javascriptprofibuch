const UserRepository = require('../src/UserRepository');
const UserService = require('../src/UserService');
const assert = require('assert');
const sinon = require('sinon');

describe('UserRepository', () => {
	let userRepository;
	let spy;
	
	beforeEach(() => {
		userRepository = new UserRepository();
		spy = sinon.spy(UserService, 'listAllUsers');
	});
	
	afterEach(() => {
		spy.restore();
	});
	
	describe('listAllUsers()', () => {
		it('should only call web service once and cache the results', () => {
			const users = userRepository.listAllUsers();
			const users2 = userRepository.listAllUsers();
			assert.equal(spy.callCount, 1);
		});
	});
});

describe('UserRepository', () => {
	let userRepository;
	let stub;
	
	before(() => {
		userRepository = new UserRepository();
		stub = sinon.stub(userRepository, 'listAllUsers');
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
	
	after(() => {
		stub.restore();
	});
	
	describe('filterUsers()', () => {
		it('should return users for given filter', () => {
			const users = userRepository.filterUsers(
				(user) => user.name.indexOf('M') === 0
			);
			assert.equal(users.length, 2);
		});
	});
	
});
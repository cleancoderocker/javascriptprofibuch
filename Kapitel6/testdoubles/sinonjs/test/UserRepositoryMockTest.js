const UserRepository = require('../src/UserRepository');
const UserService = require('../src/UserService');
const assert = require('assert');
const sinon = require('sinon');

describe('UserRepository', () => {
	let userRepository;
	let expectation;
	
	before(() => {
		userRepository = new UserRepository();
		const mock = sinon.mock(UserService);
		expectation = mock.expects('listAllUsers').atMost(1);
	});
	
	describe('listAllUsers()', () => {
		it('should only call web service once and cache the results', () => {
			const users = userRepository.listAllUsers();
			const users2 = userRepository.listAllUsers();
			expectation.verify();
		});
	});
});
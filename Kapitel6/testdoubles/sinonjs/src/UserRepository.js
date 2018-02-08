const UserService = require('./UserService');

module.exports = class UserRepository {

	listAllUsers() {
		const cache = UserService.listAllUsers();
		UserRepository.prototype.listAllUsers = () => {
			return cache;
		}
		return cache;
	}

	filterUsers(filter) {
		return this.listAllUsers().filter(filter);
	}

};

module.exports = class UserRepository {
  constructor() {
    this.users = [];
  }

  add(user) {
    if(!this.contains(user)) {
      if(user && user.name) {
        this.users.push(user);
      } else {
        throw new Error('Wrong user format.');
      }
    }
  }

  contains(newUser) {
    return this.users.filter(function(user) {
      return user.name === newUser.name;
    }).length > 0;
  }

  getAll() {
    return this.users;
  }

  clearAll() {
    this.users = [];
  }
}

const UserRepository = require('../src/UserRepository');
const assert = require('assert');
describe('UserRepository', () => {
  describe('#add()', () => {
    it('should add the user and increase the numer of all users', () => {
      const userRepository = new UserRepository();
      userRepository.add({name : 'Max'});
      userRepository.add({name : 'Moritz'});
      assert.equal(userRepository.getAll().length, 2);
    });
    it('should add the user only if it is not already there', () => {
      const userRepository = new UserRepository();
      userRepository.add({name : 'Max'});
      userRepository.add({name : 'Max'});
      assert.equal(userRepository.getAll().length, 1);
    });
  });
  describe('#clearAll()', () => {
    it('should clear all users', () => {
      const userRepository = new UserRepository();
      userRepository.add({name : 'Moritz'});
      assert.equal(userRepository.getAll().length, 1);
      userRepository.clearAll();
      assert.equal(userRepository.getAll().length, 0);
    });
  });
});
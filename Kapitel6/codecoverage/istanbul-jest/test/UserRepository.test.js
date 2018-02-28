const UserRepository = require('../src/UserRepository');
const assert = require('assert');
describe('UserRepository', () => {
  describe('#add()', () => {
    it('should add the user and increase the numer of all users', () => {
      const userRepository = new UserRepository();
      userRepository.add({name : 'Max'});
      userRepository.add({name : 'Moritz'});
      expect(userRepository.getAll()).toHaveLength(2);
    });
    it('should add the user only if it is not already there', () => {
      const userRepository = new UserRepository();
      userRepository.add({name : 'Max'});
      userRepository.add({name : 'Max'});
      expect(userRepository.getAll()).toHaveLength(1);
    });
  });
  describe('#clearAll()', () => {
    it('should clear all users', () => {
      const userRepository = new UserRepository();
      userRepository.add({name : 'Moritz'});
      expect(userRepository.getAll()).toHaveLength(1);
      userRepository.clearAll();
      expect(userRepository.getAll()).toHaveLength(0);
    });
  });
});
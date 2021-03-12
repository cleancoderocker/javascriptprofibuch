const ArtistRepository = require('../src/ArtistRepository');
const assert = require("assert");

describe('ArtistRepository', () => {
  describe('#add()', () => {
    it('should add the artist and increase the number of all artists',
      () =>{
        const artistRepository = new ArtistRepository();
        artistRepository.add({name : 'Dragontears'});
        artistRepository.add({name : 'Kyuss'});
        assert.equal(artistRepository.getAll().length, 2);
    });
    it('should add the artist only if it is not already there', () => {
      const artistRepository = new ArtistRepository();
      artistRepository.add({name : 'Kyuss'});
      artistRepository.add({name : 'Kyuss'});
      assert.equal(artistRepository.getAll().length, 1);
     });
  });
  describe('#clearAll()', () => {
    it('should clear all artists', () => {
      const artistRepository = new ArtistRepository();
      artistRepository.add({name : 'Monster Magnet'});
      assert.equal(artistRepository.getAll().length, 1);
      artistRepository.clearAll();
      assert.equal(artistRepository.getAll().length, 0);
    });
  });
});

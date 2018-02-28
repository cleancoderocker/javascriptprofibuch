// Einbinden des zu testenden Objekts
const ArtistRepository = require('../src/ArtistRepository');
describe('ArtistRepository', () => {
  describe('#add()', () => {
    it('should add the artist and increase the number of all artists',
      () =>{
        const artistRepository = new ArtistRepository();
        artistRepository.add({name : 'Dragontears'});
		artistRepository.add({name : 'Kyuss'});
		expect(artistRepository.getAll().length).toBe(2);
    });
    it('should add the artist only if it is not already there', () => {
      const artistRepository = new ArtistRepository();
      artistRepository.add({name : 'Kyuss'});
      artistRepository.add({name : 'Kyuss'});
	  expect(artistRepository.getAll().length).toBe(1);
     });
  });
  describe('#clearAll()', () => {
    it('should clear all artists', () => {
      const artistRepository = new ArtistRepository();
      artistRepository.add({name : 'Monster Magnet'});
	  expect(artistRepository.getAll().length).toBe(1);
      artistRepository.clearAll();
	  expect(artistRepository.getAll().length).toBe(0);
    });
  });
});

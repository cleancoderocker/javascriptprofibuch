/**
 * Created by philipackermann on 09.06.14.
 */
var ArtistRepository = require('../src/ArtistRepository').ArtistRepository;
var assert = require('assert');
describe('ArtistRepository', function() {
    describe('#add()', function(){
        it('should add the artist and increase the numer of all artists', function(){
            var artistRepository = new ArtistRepository();
            artistRepository.add({name : 'Dragontears'});
            artistRepository.add({name : 'Kyuss'});
            assert.equal(artistRepository.getAll().length, 2);
        });
        it('should add the artist only if it is not already there', function(){
            var artistRepository = new ArtistRepository();
            artistRepository.add({name : 'Kyuss'});
            artistRepository.add({name : 'Kyuss'});
            assert.equal(artistRepository.getAll().length, 1);
        });
    });
    describe('#clearAll()', function(){
        it('should clear all artists', function(){
            var artistRepository = new ArtistRepository();
            artistRepository.add({name : 'Monster Magnet'});
            assert.equal(artistRepository.getAll().length, 1);
            artistRepository.clearAll();
            assert.equal(artistRepository.getAll().length, 0);
        });
    });
});
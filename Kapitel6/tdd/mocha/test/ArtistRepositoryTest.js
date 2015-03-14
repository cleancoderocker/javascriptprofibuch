var ArtistRepository = require('../src/ArtistRepository').ArtistRepository;
var assert = require("assert");
describe('ArtistRepository', function() {
    describe('#add()', function(){
        it('should add the artist and increase the number of all artists', function(){
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

var should = require('should');
describe('ArtistRepository', function() {
    describe('#add()', function(){
        it('should add the artist and increase the numer of all artists', function(){
            var artistRepository = new ArtistRepository();
            artistRepository.add({name : 'Dragontears'});
            artistRepository.add({name : 'Kyuss'});
            artistRepository.should.be.instanceof(ArtistRepository);
            artistRepository.getAll().length.should.eql(2);
            artistRepository.getAll()[0].name.should.eql('Dragontears');
            artistRepository.getAll()[1].name.should.eql('Kyuss');
        });
    });
});

describe('ArtistRepository', function() {
    var artistRepository;
    beforeEach(function() { // Vor jedem Test
        artistRepository = new ArtistRepository();
    });
    afterEach(function() {}); // Nach jedem Test
    before(function() {}); // Vor allen Tests
    after(function() {}); // Nach allen Tests
    describe('#add()', function(){
        it('should add the artist and increase the numer of all artists', function(){
            artistRepository.add({name : 'Dragontears'});
            artistRepository.add({name : 'Kyuss'});
            assert.equal(artistRepository.getAll().length, 2);
        });
        it('should add the artist only if it is not already there', function(){
            artistRepository.add({name : 'Kyuss'});
            artistRepository.add({name : 'Kyuss'});
            assert.equal(artistRepository.getAll().length, 1);
        });
    });
    describe('#clearAll()', function(){
        it('should clear all artists', function(){
            artistRepository.add({name : 'Monster Magnet'});
            assert.equal(artistRepository.getAll().length, 1);
            artistRepository.clearAll();
            assert.equal(artistRepository.getAll().length, 0);
        });
    });
});

describe('Adding two artists to the AssertionRepository', function() {
    it('should add the artist and increase the number of all artists', function () {
        var artistRepository = new ArtistRepository();
        artistRepository.add({name: 'Dragontears'});
        artistRepository.add({name: 'Kyuss'});
        assert.equal(artistRepository.getAll().length, 2);
    });
});
describe('Adding one artist twice to the AssertionRepository', function() {
    it('should not add the artist the second time', function () {
        var artistRepository = new ArtistRepository();
        artistRepository.add({name : 'Kyuss'});
        artistRepository.add({name : 'Kyuss'});
        assert.equal(artistRepository.getAll().length, 1);
    });
});
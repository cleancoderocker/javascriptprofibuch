/**
 * Created by philipackermann on 09.06.14.
 */
function ArtistRepository() {
    this.artists = [];
};
ArtistRepository.prototype.add = function(artist) {
    if(!this.contains(artist)) {
        if(artist && artist.name) {
            this.artists.push(artist);
        } else {
            throw new Error('Wrong artist format.');
        }
    }
};
ArtistRepository.prototype.contains = function(newArtist) {
    return this.artists.filter(function(artist) {
        return artist.name === newArtist.name;
    }).length > 0;
};
ArtistRepository.prototype.getAll = function(artist) {
    return this.artists;
};
ArtistRepository.prototype.clearAll = function() {
    this.artists = [];
};
module.exports.ArtistRepository = ArtistRepository;
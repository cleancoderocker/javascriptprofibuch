// Model
var Album = function (title, artist) {
    this.title = ko.observable(title);
    this.artist = ko.observable(artist);
};

// ViewModel
function AlbumViewModel() {
    var that = this;
    // Daten würden normalerweise vom Server abgefragt
    that.availableArtists = [
        { name: "Kyuss"},
        { name: "Ben Harper"}
    ];
    // Initiale Daten
    that.albums = ko.observableArray([
        new Album("Wretch", that.availableArtists[0]),
        new Album("Sky Valley", that.availableArtists[0]),
        new Album("The Will To Live", that.availableArtists[1]),
        new Album("Fight for Your Mind", that.availableArtists[1])
    ]);
    that.addAlbum = function() {
        that.albums.push(new Album("", that.availableArtists[0]));
    }
    that.removeAlbum = function(album) {
        that.albums.remove(album);
    }
}
ko.applyBindings(new AlbumViewModel());
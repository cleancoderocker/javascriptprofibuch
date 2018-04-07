// Model
var Album = function(title, artist) {
  this.title = ko.observable(title);
  this.artist = ko.observable(artist);
};

// ViewModel
function AlbumViewModel() {
  // Daten würden normalerweise vom Server abgefragt
  this.availableArtists = [
	  { name: 'Kyuss' }, 
	  { name: 'Ben Harper' }
  ];
  // Initiale Daten
  this.albums = ko.observableArray([
    new Album('Wretch', this.availableArtists[0]),
    new Album('Sky Valley', this.availableArtists[0]),
    new Album('The Will To Live', this.availableArtists[1]),
    new Album('Fight for Your Mind', this.availableArtists[1])
  ]);
  this.addAlbum = () => {
    this.albums.push(new Album('', this.availableArtists[0]));
  };
  this.removeAlbum = album => {
    this.albums.remove(album);
  };
}
ko.applyBindings(new AlbumViewModel());

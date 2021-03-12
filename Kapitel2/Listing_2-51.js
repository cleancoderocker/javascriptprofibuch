const artists = [
  {
    name: 'Nick Cave',
    albums: [
      {
        title: 'Push the Sky Away'
      },
      {
        title: 'No more shall we part'
      }
    ]
  },
  {
    name: 'Ben Harper',
    albums: [
      {
        title: 'Live from Mars'
      },
      {
        title: 'The Will to Live'
      }
    ]
  }
];
function releasedAfter2000(album) {
  return album.released > 2000;
}
function hasAlbumReleasesdAfter2000(artist) {
  return artist.albums.filter(releasedAfter2000).length > 0;
}
function toArtistName(artist) {
  return artist.name;
}
artists
  .filter(hasAlbumReleasesdAfter2000)
  .map(toArtistName)
  .forEach(console.log);

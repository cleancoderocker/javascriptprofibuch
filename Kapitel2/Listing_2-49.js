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
let totalNumberOfAlbums = 0;
for (let i = 0, l = artists.length; i < l; i++) {
  totalNumberOfAlbums += artists[i].albums.length;
}
console.log(totalNumberOfAlbums);

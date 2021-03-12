const artists = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet'];
const iterator = artists.entries();
let artist = iterator.next();
while (!artist.done) {
  console.log(artist);
  artist = iterator.next();
}

const artists = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet'];
const artistsWrapper = {};
artistsWrapper.artists = artists;
artistsWrapper[Symbol.iterator] = function() {
  const artists = this.artists;
  let counter = this.artists.length - 1;
  // Rückgabe des Iterator-Objekts
  return {
    next() {
      if (counter < 0) {
        return {
          done: true
        };
      } else {
        return {
          value: artists[counter--],
          done: false
        };
      }
    }
  };
};

const iterator = artistsWrapper[Symbol.iterator]();
console.log(iterator.next()); // {value: 'Monster Magnet', done: false}
console.log(iterator.next()); // {value: 'Ben Harper', done: false}
console.log(iterator.next()); // {value: 'QOTSA', done: false}
console.log(iterator.next()); // {value: 'Kyuss', done: false}
console.log(iterator.next()); // {done: true}
for (let artist of artistsWrapper) {
  // Ausgabe der Werte 'Monster Magnet', 'Ben Harper', 'QOTSA' und 'Kyuss'
  console.log(artist);
}

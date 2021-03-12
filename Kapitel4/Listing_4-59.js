const artists = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet'];
const iterator = artists.entries();
let artist = iterator.next();
console.log(artist); // {value: [0, 'Kyuss'], done: false}
artist = iterator.next();
console.log(artist); // {value: [1, 'QOTSA'], done: false}
artist = iterator.next();
console.log(artist); // {value: [2, 'Ben Harper'], done: false}
artist = iterator.next();
console.log(artist); // {value: [3, 'Monster Magnet'], done: false}
artist = iterator.next();
console.log(artist); // {value: 'undefined', done: true}

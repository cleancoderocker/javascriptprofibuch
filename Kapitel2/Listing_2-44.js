const artists = [
  {
    name: 'Nick Cave'
  },
  {
    name: 'Ben Harper'
  }
];
const names = artists.map((artist, index, artists) => artist.name);
console.log(names); // ['Nick Cave', 'Ben Harper']

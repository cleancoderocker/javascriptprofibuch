const artists = [
  {
    name: 'Nick Cave'
  },
  {
    name: 'Ben Harper'
  }
];
const names = [];
for (let i = 0; i < artists.length; i++) {
  names.push(artists[i].name);
}
console.log(names); // ['Nick Cave', 'Ben Harper']

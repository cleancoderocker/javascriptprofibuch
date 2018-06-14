function Album(titel) {
  this.titel = titel;
}

const album2 = Album('Blues for the Red Sun');
// TypeError: Cannot read property 'title' of undefined
console.log(album2.title);

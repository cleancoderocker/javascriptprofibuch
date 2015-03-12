function Album(titel) {
    this.titel = titel;
}
var album = new Album('Sky Valley');
console.log(album.titel); // Sky Valley
var album2 = Album('Blues for the Red Sun');
console.log(album2.titel); // TypeError: Cannot read property 'titel' of undefined
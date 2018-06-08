function Album(title) {
  this.title = title;
}
const album = new Album('Sky Valley');
console.log(album.constructor); // [Function: Album]

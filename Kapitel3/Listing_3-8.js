function Album(title) {
  if (!(this instanceof Album)) {
    return new Album(title);
  }
  this.title = title;
}
const album = new Album('Sky Valley');
console.log(album.title); // Sky Valley
const album2 = Album('Blues for the Red Sun');
console.log(album2.title); // Sky Valley

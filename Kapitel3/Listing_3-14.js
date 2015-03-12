function Film(titel, produktionsjahr) {
    this.titel = titel;
    this.produktionsjahr = produktionsjahr;
};
var spiderman = new Film('Spiderman', 2002);
var starWars = new Film('Star Wars', 1977);
console.log(spiderman.__proto__); // Film {}
console.log(starWars.__proto__); // Film {}
console.log(Object.getPrototypeOf(spiderman)); // Film {}
console.log(Object.getPrototypeOf(starWars)); // Film {}
console.log(spiderman.constructor); // function Film() {...}
console.log(starWars.constructor); // function Film() {...}
class Movie {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
}
const spiderman = new Movie('Spiderman', 2002);
const starWars = new Movie('Star Wars', 1977);
console.log(spiderman.__proto__); // Movie {}
console.log(starWars.__proto__); // Movie {}
console.log(Object.getPrototypeOf(spiderman)); // Movie {}
console.log(Object.getPrototypeOf(starWars)); // Movie {}
console.log(spiderman.constructor); // function Movie() {...}
console.log(starWars.constructor); // function Movie() {...}

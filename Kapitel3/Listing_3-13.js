var max = {
    name: 'Max',
    nachname: 'Mustermann'
};
var maexchen = Object.create(max);
maexchen.name = "Maexchen";
console.log(maexchen.__proto__);
// Object {name: "Max", nachname: "Mustermann"}
console.log(Object.getPrototypeOf(maexchen));
// Object {name: "Max", nachname: "Mustermann"}
console.log(maexchen.name); // Maexchen
console.log(maexchen.nachname); // Mustermann
const max = {
  firstName: 'Max',
  lastName: 'Mustermann'
};
console.log(max.__proto__); // Object {}
console.log(Object.getPrototypeOf(max)); // Object {}
const maexchen = Object.create(max);
maexchen.firstName = 'Maexchen';
console.log(maexchen.__proto__);
// Object {firstName: "Max", lastName: "Mustermann"}
console.log(Object.getPrototypeOf(maexchen));
// Object {firstName: "Max", lastName: "Mustermann"}
console.log(maexchen.firstName); // Maexchen
console.log(maexchen.lastName); // Mustermann

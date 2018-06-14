class Employee {
  constructor(firstName, lastName, id) {
    var firstName = firstName;
    var lastName = lastName;
    var id = id;
  }
}

const max = new Employee('Max', 'Mustermann', 2345);
console.log(max.firstName); // undefined
console.log(max.lastName); // undefined
console.log(max.id); // undefined

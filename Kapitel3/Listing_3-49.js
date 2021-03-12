class Employee {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
  }
}

const max = new Employee('Max', 'Mustermann', 2345);
console.log(max.firstName); // Max
console.log(max.lastName); // Mustermann
console.log(max.id); // 2345

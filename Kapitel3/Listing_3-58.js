function Employee(firstName, lastName, id) {
  var firstName = firstName;
  var lastName = lastName;
  var id = id;
  function getFirstName() {
    return firstName;
  }
  function getLastName() {
    return lastName;
  }
  function getId() {
    return id;
  }
}
const max = new Employee('Max', 'Mustermann', 2345);
//console.log(max.getFirstName()); // TypeError: undefined is not a function
//console.log(max.getLastName()); // TypeError: undefined is not a function
//console.log(max.getId()); // TypeError: undefined is not a function

function Employee(firstName, lastName, id) {
  // Private Eigenschaften
  let _firstName = firstName;
  let _lastName = lastName;
  let _id = id;
  // Privilegiert öffentliche Methoden
  this.getFirstName = function() {
    return _firstName;
  };
  this.getLastName = function() {
    return _lastName;
  };
  this.getId = function() {
    return _id;
  };
  this.setFirstName = function(newFirstName) {
    _firstName = newFirstName;
  };
  this.setLastName = function(newLastName) {
    _lastName = newLastName;
  };
  this.setId = function(newId) {
    _id = newId;
  };
  this.print = function() {
    return firstName + ' ' + lastName + '( ' + id + ')';
  };
}
const max = new Employee('Max', 'Mustermann', 2345);
max.setFirstName('Moritz');
console.log(max.firstName); // undefined
console.log(max.getFirstName()); // Moritz

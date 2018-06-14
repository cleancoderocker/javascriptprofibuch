const Employee = (function() {
  function Employee(firstName, lastName, id) {
    var firstName = firstName;
    var lastName = lastName;
    var id = id;
    this.getFirstName = function() {
      return firstName;
    };
    /* Hier die weiteren Getter */
  }
  Employee.prototype.print = function() {
    return (
      this.getFirstName() + ' ' + this.getLastName() + ' (' + this.getId() + ')'
    );
  };
  /* restliche Methoden */
  return Employee;
})();

const max = new Employee('Max', 'Mustermann', 2345);
max._firstName = 'Moritz';
console.log(max.getFirstName()); // Max
console.log(max.getLastName()); // Mustermann
console.log(max.getId()); // 2345

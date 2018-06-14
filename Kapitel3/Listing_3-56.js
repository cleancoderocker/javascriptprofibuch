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

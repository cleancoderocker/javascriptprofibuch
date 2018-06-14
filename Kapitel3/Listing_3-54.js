function Employee(firstName, lastName, id) {
  this._firstName = firstName;
  this._lastName = lastName;
  this._id = id;
}
Employee.prototype.getFirstName = function() {
  return this._firstName;
};
Employee.prototype.getLastName = function() {
  return this._lastName;
};
Employee.prototype.getId = function() {
  return this._id;
};
Employee.prototype.print = function() {
  return this._firstName + ' ' + this._lastName + ' (' + this._id + ')';
};

function defaultLastName() {
  return 'Mustermann';
}
function createPerson(firstName = 'Max', lastName = defaultLastName()) {
  return {
    firstName: firstName,
    lastName: lastName
  };
}

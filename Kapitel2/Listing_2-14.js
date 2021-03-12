const person = {
  firstName: 'Max', // Objekteigenschaft
  getFirstName: function() {
    return this.firstName;
  }
};
console.log(person.getFirstName()); // Ausgabe: Max

const person = {
  firstName: 'Max',
  lastName: 'Mustermann',
  talk: function() {
    console.log('Hallo');
  }
};

delete person.firstName;
console.log(person.firstName); 	// Ausgabe: undefined
delete person['lastName'];
console.log(person.lastName); 	// Ausgabe: undefined

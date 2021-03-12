const person = {
  firstName: 'Max',
  lastName: 'Mustermann',
  talk: function() {
    console.log('Hallo');
  }
};

person.firstName = 'Moritz';
person['lastName'] = 'Tester';
console.log(person.firstName); 	// Moritz
console.log(person.lastName); 	// Tester
person.talk(); 					// Hallo
person[talk](); 				// Hallo

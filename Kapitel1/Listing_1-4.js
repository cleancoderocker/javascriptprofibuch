var person = {
    name : 'Max',
    nachname : 'Mustermann',
    sprechen : function() {
        console.log('Hallo');
    }
}
console.log(person.name); // Max
console.log(person['nachname']); // Mustermann
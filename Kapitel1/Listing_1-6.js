var person = {
    name : 'Max',
    nachname : 'Mustermann',
    sprechen : function() {
        console.log('Hallo');
    }
}
delete person.name;
console.log(person.name); // Ausgabe: undefined
delete person['nachname'];
console.log(person.nachname); // Ausgabe: undefined
var person = {
    name : 'Max',
    nachname : 'Mustermann',
    sprechen : function() {
        console.log('Hallo');
    }
}
person.name = 'Moritz';
person['nachname'] = 'Tester';
console.log(person.name); // Moritz
console.log(person.nachname); // Tester
person.sprechen(); // Hallo
person['sprechen'](); // Hallo
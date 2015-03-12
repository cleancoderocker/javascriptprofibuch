var person = {
    name: 'Max', // Objekteigenschaft
    getName: function() {
        return this.name;
    }
}
console.log(person.getName()); // Ausgabe: Max
function Person(name, nachname) {
// Objekteigenschaften
    this.name = name;
    this.nachname = nachname;
}
// Statische Eigenschaft
Person.MAX_GEWICHT = 2000;
// Statische Methode
Person.erstelleDummy = function() {
    return new Person('Max', 'Mustermann');
}
// Objektmethoden
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getNachname = function() {
    return this.nachname;
}
console.log(Person.MAX_GEWICHT); // 2000
console.log(Person.erstelleDummy());
console.log(Person.getName()); // undefined, da Objektmethode
console.log(new Person('Moritz', 'Mustermann').getName()); // Moritz
console.log(new Person().erstelleDummy()); // undefined, da statische Methode
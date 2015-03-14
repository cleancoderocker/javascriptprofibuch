/* Funktioniert nur in ES6 */
class Person {
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
// Objektmethode
    toString() {
        return this.vorname + ' ' + this.nachname;
    }
// Statische Methode
    static beispiel() {
        return 4711;
    }
}
var max = new Person('Max', 'Mustermann');
class Mitarbeiter extends Person {
    toString() {
        return super.toString() + ' ' + this.mitarbeiterID;
    }
}
var max = new Person('Max', 'Mustermann');
var moritz = new Mitarbeiter('Moritz', 'Mustermann', 2345);
console.log(max.toString()); // Max Mustermann
console.log(moritz.toString()); // Moritz Mustermann 2345
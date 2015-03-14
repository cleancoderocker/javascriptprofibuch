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
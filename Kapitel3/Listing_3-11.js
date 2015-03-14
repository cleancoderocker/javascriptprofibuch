/* Funktioniert nur in ES6 */
class Person {
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
    toString() {
        return this.vorname + ' ' + this.nachname;
    }
}
var max = new Person('Max', 'Mustermann');
console.log(max.toString());
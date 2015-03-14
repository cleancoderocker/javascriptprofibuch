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
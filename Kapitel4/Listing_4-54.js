/* Funktioniert nur in ES6 */
var person = {
    name : 'Max',
    nachname : 'Mustermann',
    adresse : {
        plz : 23456,
        strasse : 'Musterstraße 22'
    }
}
var {
    name : nameExtrahiert,
    nachName : nachNameExtrahiert,
    adresse : {
        plz : plzExtrahiert,
        strasse : strasseExtrahiert
        }
    } = person;
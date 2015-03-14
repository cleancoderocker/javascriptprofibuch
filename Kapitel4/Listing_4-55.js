/* Funktioniert nur in ES6 */
var person = {
    name : 'Max',
    nachname : 'Mustermann',
    adresse : {
        plz : 23456,
        strasse : 'Musterstraße 22'
    },
    telefonnummern : [
        23452345678,
        2345623456
    ]
}
var {
    name : nameExtrahiert,
    nachName : nachNameExtrahiert,
    adresse : {
        plz : plzExtrahiert,
        strasse : strasseExtrahiert
        },
    telefonnummern : [
        telefonnummer1Extrahiert,
        telefonnummer2Extrahiert
        ]
    } = person;
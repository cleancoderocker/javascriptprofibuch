/* Funktioniert nur in ES6 */
var person = {
    name : 'Max',
    nachname : 'Mustermann'
};
var {
    name : nameExtrahiert,
    nachname : nachnameExtrahiert
    } = person;
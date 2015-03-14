/* Funktioniert nur in ES6 */
var name = 'Max Mustermann';
function getName() {
    return name;
}
var meldung = `Mein Name ist ${getName()}, ich bin ${44 + 44} Jahre jung`;
console.log(meldung); // Mein Name ist Max Mustermann, ich bin 88 Jahre jung
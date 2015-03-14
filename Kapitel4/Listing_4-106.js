/* Funktioniert nur in ES6 */
var name = 'Max Mustermann';
var meldung = tagFunktion`Mein Name ist ${name}, ich bin ${44} Jahre jung`;
console.log(meldung); // Mein Name ist Max Mustermann, ich bin 44 Jahre jung
meldung = tag`Mein Name ist ${name}, ich bin ${88} Jahre jung`;
console.log(meldung); // Mein Name ist Max Mustermann
function tagFunktion(strings, ...werte) {
    let name = werte[0];
    let alter = werte[1];
    if(alter > 80) {
        return `${strings[0]}${werte[0]}`;
    }
    return `${strings[0]}${name}${strings[1]}${alter}${strings[2]}`;
}
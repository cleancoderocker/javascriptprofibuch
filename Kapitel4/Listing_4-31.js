/* Funktioniert nur in ES6 */
function erstellePerson(name = 'Max', nachname = 'Mustermann') {
    return {
        name: name,
        nachname: nachname
    }
}
var moritz = erstellePerson('Moritz');
console.log(moritz.name); // 'Moritz'
console.log(moritz.nachname); // 'Mustermann'
var herrNull = erstellePerson(undefined, null);
console.log(herrNull.name); // 'Max'
console.log(herrNull.nachname); // null
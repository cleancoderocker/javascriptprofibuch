/* Funktioniert nur in ES6 */
var map = new Map();
map.set("Schlüssel 1", "Wert 1");
map.set("Schlüssel 2", "Wert 2");
for (let eintrag of map) {
    let schluessel = eintrag[0];
    let wert = eintrag[1];
    console.log(schluessel + ": " + wert);
}
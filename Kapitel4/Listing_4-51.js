/* Funktioniert nur in ES6 */
var map = new Map();
map.set("Schlüssel 1", "Wert 1");
map.set("Schlüssel 2", "Wert 2");
for (let [schluessel, wert] of map) {
    console.log(schluessel + ": " + wert);
}
function getNameGlobal() {
    return this.name;
}
var person2 = {
    name : 'Moritz',
    getName : getNameGlobal
}
var wuestenrockKoenige = {
    name : 'Kyuss',
    getName : getNameGlobal
}
console.log(person2.getName()); // Ausgabe: Moritz
console.log(wuestenrockKoenige.getName()); // Ausgabe: Kyuss
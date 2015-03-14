"use strict";
var name = "globaler Name";
function getNameGlobal() {
    return this.name;
}
// console.log(getNameGlobal()); // Fehler: this ist nicht definiert
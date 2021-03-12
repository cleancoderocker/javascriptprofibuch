'use strict';
const firstName = 'globaler Name';
function getFirstNameGlobal() {
  return this.firstName;
}
console.log(getFirstNameGlobal()); // Fehler: this ist nicht definiert

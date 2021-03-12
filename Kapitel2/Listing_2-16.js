firstName = 'globaler Name';
function getFirstNameGlobal() {
  return this.firstName;
}
console.log(getFirstNameGlobal()); // Ausgabe: globaler Name

function Mitarbeiter(name, nachname, mitarbeiterID) {
    this.name = name;
    this.nachname = nachname;
    this.mitarbeiterID = mitarbeiterID;
}
var max = new Mitarbeiter('Max', 'Mustermann', 2345);
console.log(max.name); // Max
console.log(max.nachname); // Mustermann
console.log(max.mitarbeiterID); // 2345
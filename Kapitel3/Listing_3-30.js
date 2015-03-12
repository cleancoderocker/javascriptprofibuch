function Mitarbeiter(name, nachname, mitarbeiterID) {
    var name = name;
    var nachname = nachname;
    var mitarbeiterID = mitarbeiterID;
}
var max = new Mitarbeiter('Max', 'Mustermann', 2345);
console.log(max.name); // undefined
console.log(max.nachname); // undefined
console.log(max.mitarbeiterID); // undefined
function Mitarbeiter(name, nachname, mitarbeiterID) {
    var name = name;
    var nachname = nachname;
    var mitarbeiterID = mitarbeiterID;
    function getName() {
        return name;
    }
    function getNachname() {
        return nachname;
    }
    function getMitarbeiterID() {
        return mitarbeiterID;
    }
}
var max = new Mitarbeiter('Max', 'Mustermann', 2345);
// console.log(max.getName()); // TypeError: undefined is not a function
//console.log(max.getNachname()); // TypeError: undefined is not a function
//console.log(max.getMitarbeiterID()); // TypeError: undefined is not a function

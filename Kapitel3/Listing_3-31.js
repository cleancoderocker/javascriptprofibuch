function Mitarbeiter(name, nachname, mitarbeiterID) {
    var name = name;
    var nachname = nachname;
    var mitarbeiterID = mitarbeiterID;
    this.getName = function() {
        return name;
    }
    this.getNachname = function() {
        return nachname;
    }
    this.getMitarbeiterID = function() {
        return mitarbeiterID;
    }
    this.setName = function(neuerName) {
        name = neuerName;
    }
    this.setNachname = function(neuerNachname) {
        nachname = neuerNachname;
    }
    this.setMitarbeiterID = function(neueMitarbeiterID) {
        mitarbeiterID = neueMitarbeiterID;
    }
    this.print = function() {
      return this.getName() + ' ' + this.getNachname() + ' (' + this.getMitarbeiterID() + ')';
    };
}
var max = new Mitarbeiter('Max', 'Mustermann', 2345);
max.setName('Moritz');
console.log(max.name); // undefined
console.log(max.nachname); // undefined
console.log(max.mitarbeiterID); // undefined
console.log(max.getName()); // Moritz
console.log(max.getNachname()); // Mustermann
console.log(max.getMitarbeiterID()); // 2345
console.log(max.print());
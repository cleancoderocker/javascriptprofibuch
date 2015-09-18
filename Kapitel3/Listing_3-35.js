var Mitarbeiter = (function() {
    function Mitarbeiter(name, nachname, mitarbeiterID) {
      var name = name;
      var nachname = nachname;
      var mitarbeiterID = mitarbeiterID;
      this.getName = function () {
        return name;
      };
      this.getNachname = function () {
        return nachname;
      };
      this.getMitarbeiterID = function () {
        return mitarbeiterID;
      };
    }
    return Mitarbeiter;
})();
Mitarbeiter.prototype.print = function() {
  return this.getName() + ' ' + this.getNachname() + ' (' + this.getMitarbeiterID() + ')';
};
var max = new Mitarbeiter('Max', 'Mustermann', 2345);
max._name = 'Moritz';
console.log(max.getName()); // Max
console.log(max.getNachname()); // Mustermann
console.log(max.getMitarbeiterID()); // 2345

var max = new Mitarbeiter('Max', 'Mustermann', 2345);
var moritz = new Mitarbeiter('Moritz', 'Mustermann', 2346);
console.log(max.getName()); // Max
console.log(moritz.getName()); // Moritz

var Mitarbeiter = (function () {
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
Mitarbeiter.prototype.print = function () {
  return this.getName() + ' ' + this.getNachname() + ' (' + this.getMitarbeiterID() + ')';
};
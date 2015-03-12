var Mitarbeiter = (function() {
    var _name;
    var _nachname;
    var _mitarbeiterID;
    function Mitarbeiter(name, nachname, mitarbeiterID) {
        _name = name;
        _nachname = nachname;
        _mitarbeiterID = mitarbeiterID;
    }
    Mitarbeiter.prototype.getName = function() {
        return _name;
    };
    Mitarbeiter.prototype.getNachname = function() {
        return _nachname;
    };
    Mitarbeiter.prototype.getMitarbeiterID = function() {
        return _mitarbeiterID;
    };
    return Mitarbeiter;
})();
var max = new Mitarbeiter('Max', 'Mustermann', 2345);
max._name = 'Moritz';
console.log(max.getName()); // Max
console.log(max.getNachname()); // Mustermann
console.log(max.getMitarbeiterID()); // 2345
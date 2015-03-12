function Mitarbeiter(name, nachname, mitarbeiterID) {
    this._name = name;
    this._nachname = nachname;
    this._mitarbeiterID = mitarbeiterID;
}
Mitarbeiter.prototype.getName = function() {
    return this._name;
};
Mitarbeiter.prototype.getNachname = function() {
    return this._nachname;
};
Mitarbeiter.prototype.getMitarbeiterID = function() {
    return this._mitarbeiterID;
};
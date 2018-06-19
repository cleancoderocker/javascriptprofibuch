var Person = {
  set name(value) {
    console.log('Neuer Name: ' + value);
    this._name = value;
  },
  get name() {
    console.log('Name: ' + this._name);
    return this._name;
  },
  set lastName(value) {
    console.log('Neuer Nachname: ' + value);
    this._lastName = value;
  },
  get lastName() {
    console.log('Nachname: ' + this._lastName);
    return this._lastName;
  }
};

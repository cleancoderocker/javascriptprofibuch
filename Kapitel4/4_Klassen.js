class Album {
  constructor(interpret, titel, jahr) {
    this.interpret = interpret;
    this.titel = titel;
    this.jahr = jahr;
  }
}

class Schallplatte extends Album {
  constructor(interpret, titel, jahr) {
    super(interpret, titel, jahr);
  }
}






function generiereSuperklasse() {
  return Album;
}

class Schallplatte extends generiereSuperklasse() {
  constructor(interpret, titel, jahr) {
    super(interpret, titel, jahr);
  }
}
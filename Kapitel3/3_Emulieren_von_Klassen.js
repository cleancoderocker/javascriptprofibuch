function Medium(interpret, titel, jahr) {
  this.interpret = interpret;
  this.titel = titel;
  this.jahr = jahr;
}

Medium.prototype.getInterpret = function() {
  return this.interpret;
}
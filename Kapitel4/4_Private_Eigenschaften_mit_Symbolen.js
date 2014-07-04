const privateInterpretEigenschaft = Symbol('interpret');
const privateTitelEigenschaft = Symbol('titel');

function Album(interpret, titel) {
  this[privateInterpretEigenschaft] = interpret;
  this[privateTitelEigenschaft] = titel;
}

Album.prototype.getInterpret = function() {
  return this[privateInterpretEigenschaft];
}

Album.prototype.getTitel = function() {
  return this[privateTitelEigenschaft];
}

var album = new Album('Tool', 'Lateralus');
album.interpret; // undefined
album.getInterpret(); // Tool
album.titel; // undefined
album.getTitel(); // Lateralus
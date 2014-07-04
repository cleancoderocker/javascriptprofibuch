const privateEigenschaften = new WeakMap();

function Album(interpret, titel) {
  const album = {
    interpret: interpret, 
    titel: titel
  };
  privateEigenschaften.set(this, album);
}

Album.prototype.getInterpret = function() {
  const album = privateEigenschaften.get(this);
  return album.interpret;
}

Album.prototype.getTitel = function() {
  const album = privateEigenschaften.get(this);
  return album.titel;
}

var album = new Album('Tool', 'Lateralus');
album.titel; // undefined
album.getTitel(); // Lateralus
function songwriting(callback) {
  var songs = [];
  console.log('Songwriting gestartet');
  window.setTimeout(
    function() {
      console.log('Songwriting beendet');
      callback(songs);
    }, Math.random() * 2000 + 1000);
}

function tonaufnahme(songs, callback) {
  var aufnahme = {songs : songs};
  console.log('Tonaufnahme gestartet');
  window.setTimeout(
    function() {
      console.log('Tonaufnahme beendet');
      callback(aufnahme);
    }, Math.random() * 2000 + 1000);
}

function mixenUndMastering(aufnahme, callback) {
  var album = {titel : '', songs : aufnahme.songs};
  console.log('Mixen und Mastering gestartet');
  window.setTimeout(
    function() {
      console.log('Mixen und Mastering beendet');
      callback(album);
    }, Math.random() * 2000 + 1000);
}

function cdProduktion(album, callback) {
  var cd = {};
  console.log('Produktion gestartet');
  window.setTimeout(
    function() {
      console.log('Produktion beendet');
      callback(album);
    }, Math.random() * 2000 + 1000);
}

// Pyramid of Doom
songwriting(
  function(songs) {
    tonaufnahme(songs, 
      function(aufnahme) {
        mixenUndMastering(aufnahme, 
          function(album) {
            cdProduktion(album, 
              function() {
                console.log('Fertig');
              }
            )
          }
        )
      }
    )
  }
);

// Benannte Handler
function songwritingBeendet(songs) {
  tonaufnahme(songs, tonaufnahmeBeendet);
}

function tonaufnahmeBeendet(aufnahme) {
  mixenUndMastering(aufnahme, mixenUndMasteringBeendet);
}

function mixenUndMasteringBeendet(album) {
  cdProduktion(album, cdProduktionBeendet);
}

function cdProduktionBeendet(album) {
  console.log('Fertig');
}

songwriting(songwritingBeendet);



function download(url, callback) {
  var webRessource;
  console.log('Download gestartet');
  window.setTimeout(
    function() {
      console.log('Download beendet');
      callback(url, webRessource);
    }, Math.random() * 2000 + 1000);
}

function parse(url, webRessource, callback) {
  console.log('Parsen gestartet');
  window.setTimeout(
    function() {
      console.log('Parsen beendet');
      callback(url, webRessource);
    }, Math.random() * 2000 + 1000);
}

function render(url, webRessource, callback) {
  console.log('Rendern gestartet');
  window.setTimeout(
    function() {
      console.log('Rendern beendet');
      callback(url, webRessource);
    }, Math.random() * 2000 + 1000);
}

var url = "";
download(url, 
  function(url, webRessource) {
    parse(url, webRessource, 
      function(url, webRessource) {
        render(url, webRessource, 
          function(url, webRessource) {
            console.log('Fertig: ' + url);
          }
        )
      }
    )
  }
);
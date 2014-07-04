function songwriting() {
  var songs = [];
  console.log('Songwriting gestartet');
  var promise = new Promise(
    function(resolve, reject) {
      window.setTimeout(
        function() {
          console.log('Songwriting beendet');
          resolve(songs);
        }, Math.random() * 2000 + 1000);
    }
  );
  return promise;
}

function tonaufnahme(songs) {
  var aufnahme = {songs : songs};
  console.log('Tonaufnahme gestartet');
  var promise = new Promise(
    function(resolve, reject) {
      window.setTimeout(
        function() {
          if(songs.length === 0) {
            reject(new Error('Keine Songs, keine Musikproduktion.'));
          }
          console.log('Tonaufnahme beendet');
          resolve(aufnahme);
      }, Math.random() * 2000 + 1000);
    }
  );
  return promise;
}

function mixenUndMastering(aufnahme) {
  var album = {titel : '', songs : aufnahme.songs};
  console.log('Mixen und Mastering gestartet');
  var promise = new Promise(
    function(resolve, reject) {
      window.setTimeout(
        function() {
          console.log('Mixen und Mastering beendet');
          resolve(album);
      }, Math.random() * 2000 + 1000);
    }
  );
  return promise;
}

function cdProduktion(album) {
  console.log('Produktion gestartet');
  var promise = new Promise(
    function(resolve, reject) {
      window.setTimeout(
        function() {
          console.log('Produktion beendet');
          resolve(album);
      }, Math.random() * 2000 + 1000);
    }
  );
  return promise;
}

// Promises mit anonymen Handlern
songwriting().then(function(songs) {
  return tonaufnahme(songs);
}).catch(function(fehler) {
  console.error(fehler);
  return {};
}).then(function(aufnahme) {
  return mixenUndMastering(aufnahme);
}).then(function(album) {
  return cdProduktion(album);
}).then(function(album) {
  console.log('Fertig');
});

// Error Handler
songwriting().then(function(songs) {
  return tonaufnahme(songs); // bis hier
}, function(fehler) {
  console.error(fehler);
}).then(function(aufnahme) {
  return mixenUndMastering(aufnahme);
}).then(function(album) {
  return cdProduktion(album);
}).then(function(album) {
  console.log('Fertig');
});

songwriting().then(function(songs) { // *
  return tonaufnahme(songs); // *
}).then(function(aufnahme) {
  return mixenUndMastering(aufnahme);
}, function(fehler) { // *
  console.error(fehler); // *
}).then(function(album) { // *
  return cdProduktion(album); // *
}).then(function(album) { // *
  console.log('Fertig'); // *
});

songwriting().then(function(songs) { // *
  return tonaufnahme(songs); // *
}).catch(function(fehler) { // *
  console.error(fehler); // *
  return {};
}).then(function(aufnahme) {
  return mixenUndMastering(aufnahme);
}).then(function(album) {
  return cdProduktion(album);
}).then(function(album) {
  console.log('Fertig'); // bis hier
});


songwriting().then(function(songs) {
  console.log('then tonaufnahme(songs)');
  return tonaufnahme(songs);
}).then(function(aufnahme) {
  console.log('then mixenUndMastering(aufnahme)');
  return mixenUndMastering(aufnahme);
}).catch(function(fehler) {
  console.error(fehler);
  return {};
}).then(function(album) {
  console.log('then cdProduktion(album)');
  return cdProduktion(album);
}).then(function(album) {
  console.log('Fertig');
});

// Error Handler
songwriting().then(function(songs) {
  return tonaufnahme(songs);
}).then(undefined, function(fehler) {
  console.error(fehler);
}).then(function(aufnahme) {
  return mixenUndMastering(aufnahme);
}).then(function(album) {
  return cdProduktion(album);
}).then(function(album) {
  console.log('Fertig');
});


// Promises mit benannten Handlern
function songwritingBeendet(songs) {
  return tonaufnahme(songs);
}

function tonaufnahmeBeendet(aufnahme) {
  return mixenUndMastering(aufnahme);
}

function mixenUndMasteringBeendet(album) {
  return cdProduktion(album);
}

function cdProduktionBeendet(album) {
  console.log('Fertig');
}

songwriting()
  .then(songwritingBeendet)
  .then(tonaufnahmeBeendet)
  .then(mixenUndMasteringBeendet)
  .then(cdProduktionBeendet);







function download(url) {
  var webRessource;
  console.log('Download gestartet');
  var promise = new Promise(
  function(resolve, reject) {
    window.setTimeout(
      function() {
        console.log('Download beendet');
        resolve(webRessource);
      }, Math.random() * 2000 + 1000);
    }
  );
  return promise;
}

function parse(webRessource) {
  console.log('Parsen gestartet');
  var promise = new Promise(
  function(resolve, reject) {
    window.setTimeout(
      function() {
        console.log('Parsen beendet');
        resolve(webRessource);
      }, Math.random() * 2000 + 1000);
    }
  );
  return promise;
}

function render(webRessource) {
  console.log('Rendern gestartet');
  var promise = new Promise(
  function(resolve, reject) {
    window.setTimeout(
      function() {
        console.log('Rendern beendet');
        resolve(webRessource);
      }, Math.random() * 2000 + 1000);
    }
  );
  return promise;
}

download('tests').then(function(webRessource) {
  return parse(webRessource);
}).then(function(webRessource) {
  return render(webRessource);
}).then(function(album) {
  console.log('Fertig');
});



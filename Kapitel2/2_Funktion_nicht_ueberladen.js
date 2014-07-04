(function() {

    function erstelleAlbum(titel, interpret, erscheinungsjahr, genre, tracks) {
        return {
            titel: titel,
            interpret: interpret,
            erscheinungsjahr: erscheinungsjahr,
            genre: genre,
            tracks: tracks
        };
    }

    var album = erstelleAlbum('The Will to Live', 'Ben Harper', 1997, 'Singer-Songwriter', []);
})();

(function() {
    function erstelleAlbum(titel, interpret, erscheinungsjahr, genre, tracks, log) {
        var album = {
            titel: titel,
            interpret: interpret,
            erscheinungsjahr: erscheinungsjahr,
            genre: genre,
            tracks: tracks
        };
        if (log) {
            console.log('Erstelltes Album');
            console.log('********************************');
            console.log(JSON.stringify(album, null, 2));
            console.log('********************************');
        }
        return album;
    }

    var album = erstelleAlbum('The Will to Live', 'Ben Harper', 1997, 'Singer-Songwriter', [], true);
})();

(function() {
    function erstelleAlbum(titel, interpret, erscheinungsjahr, genre, tracks) {
        return {
            titel: titel,
            interpret : interpret.name,
            erscheinungsjahr: erscheinungsjahr,
            genre : genre,
            tracks : tracks
        };
    }
    var interpret = {
        name : 'Ben Harper'
    }
    var album = erstelleAlbum('The Will to Live', interpret, 1997, 'Singer-Songwriter', [], true);
    console.log(album);
})();

(function() {
    function vebindeDatenbank(datenbank, server, port, name, passwort)
})();
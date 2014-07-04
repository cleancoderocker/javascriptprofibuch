(function() {

    var erstelleVerbindung = function(server, port, pfad) {
        var verbindung = {};
        verbindung.server = server;
        verbindung.port = port;
        verbindung.pfad = pfad;
        return verbindung;
    }

    var erstelleVerbindungZuGaliloPress = erstelleVerbindung.bind(null, "http://www.galileocomputing.de/");
    var verbindung = erstelleVerbindungZuGaliloPress(8080, "/2565");
    console.log(JSON.stringify(verbindung, null, 2));

})();
define(
    'Validator', // Names des Moduls
    ['Persistenz'], // Zu importierende Module
    function (persistenz) { // Funktion, die das Modul zurückliefert
        var modul = {
            format: 'HTML5',
            ergebnisse: [],
            validiere: function() {
                console.log('Validierung gestartet: ' + format);
// Hier weiterer Code, der die Ergebnisse ermittelt
                persistenz.speichereErgebnisse(ergebnisse);
            }
        }
        return modul;
    }
);
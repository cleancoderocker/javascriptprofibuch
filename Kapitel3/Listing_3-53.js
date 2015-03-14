var ValidatorModul = (function (modul) {
    var format = 'HTML5';
// 2.) Eigenschaften und Funktionen hinzufügen
    modul.ergebnisse = [];
    modul.validiere = function() {
        console.log('Validierung gestartet: ' + format);
        modul.ergebnisse.push('Test fehlgeschlagen');
    }
    modul.getErgebnisse = function() {
        return ergebnisse;
    }
// 3.) Modul selber als Rückgabewert liefern
    return modul;
})(ValidatorModul || {}); // 1.) Modul selber als Parameter übergeben
ValidatorModul.validiere();
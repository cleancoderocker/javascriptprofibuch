/* Funktioniert nur in ES6 */
var aktuellerSong = {
    titel: 'Demon Cleaner',
    interpret: 'Kyuss',
    album: {
        titel: 'Sky Valley',
        erschienen: '1994'
    }
};
var logSongInfo = function logSongInfo(
    {
        titel,
        interpret,
        album: {
            erschienen: jahr
            }
        }
) {
    console.log('Titel: ' + titel + '\nInterpret: ' + interpret +
    '\nErschienen: ' + jahr);
};
logSongInfo(aktuellerSong);
// Ausgabe:
// Titel: Demon Cleaner
// Interpret: Kyuss
// Erschienen: 1994
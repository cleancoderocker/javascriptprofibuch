const currentSong = {
  title: 'Demon Cleaner',
  artist: 'Kyuss',
  album: {
    title: 'Sky Valley',
    released: '1994'
  }
};
const logSongInfo = function logSongInfo({
  titel,
  artist,
  album: { released: year }
}) {
  console.log(
    'Titel: ' + title + '\nInterpret: ' + artist + '\nErschienen: ' + year
  );
};
logSongInfo(currentSong);
// Ausgabe:
// Titel: Demon Cleaner
// Interpret: Kyuss
// Erschienen: 1994

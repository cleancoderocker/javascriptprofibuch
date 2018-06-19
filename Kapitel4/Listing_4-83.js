const artists = new Set();
artists.add('Kyuss');
artists.add('Kyuss');
artists.add('Tool');
artists.add('Monster Magnet');
artists.add('Ben Harper');
console.log(artists.size); // Ausgabe: 4
console.log(artists.has('Kyuss')); // Ausgabe: true
console.log(artists.has('Justin Bieber')); // Ausgabe: false
for (let artist of artists) {
  console.log(artist);
}

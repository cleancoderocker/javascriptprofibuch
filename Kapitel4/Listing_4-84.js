const artists = new Set();
artists.add('Kyuss');
artists.add('Kyuss');
artists.add('Tool');
artists.add('Monster Magnet');
artists.add('Ben Harper');
artists.add('Coldplay'); // Bitte nicht
console.log(artists.size); // Ausgabe: 5
artists.delete('Coldplay'); // Schon besser
console.log(artists.size); // Ausgabe: 4
artists.clear();
console.log(artists.size); // Ausgabe: 0
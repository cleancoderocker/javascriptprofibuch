function addTagsToArtist(artist) {
  var tags = Array.prototype.slice.call(arguments, 1);
  tags.forEach(function(tag) {
    console.log(artist + ' ' + tag);
    artist.addTag(tag);
  });
  // weitere Logik hier
}
addTagsToArtist('Kylesa', 'heavy', 'sludge', 'stoner');
addTagsToArtist('Kyuss', 'heavy', 'stoner');
addTagsToArtist('Monster Magnet', 'psychedelic', 'spacerock');

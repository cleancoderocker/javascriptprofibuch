function addTagsToArtist(artist, ...tags) {
  tags.forEach(tag => {
    console.log(artist + ' ' + tag);
    artist.addTag(tag);
  });
}

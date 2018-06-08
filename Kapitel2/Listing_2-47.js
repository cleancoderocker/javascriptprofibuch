const albums = [
  {
    title: 'Push the Sky Away',
    artist: 'Nick Cave',
    released: 2013
  },
  {
    title: 'No more shall we part',
    artist: 'Nick Cave',
    released: 2001
  },
  {
    title: 'Live from Mars',
    artist: 'Ben Harper',
    released: 2003
  },
  {
    title: 'The Will to Live',
    artist: 'Ben Harper',
    released: 1997
  }
];

const releasedBefore2000 = albums.filter(
  (album, index, albums) => album.released < 2000
);
console.log(releasedBefore2000);

const Album = require('./Album');
const AlbumRepository = require('./AlbumRepository');
const album = new Album({
	artist: 'The Doors',
	title: 'Strange Days',
	year: 1967
});
const repository = new AlbumRepository();
repository
	.save(album)
	.then(() => console.log('Album saved'))
	.catch((error) => console.error(error));

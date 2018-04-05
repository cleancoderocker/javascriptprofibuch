const Album = require('./Album');
const album = new Album({
	artist: 'The Doors',
	title: 'Strange Days',
	year: 1967
});
album
	.save()
	.then(() => console.log('Album saved'))
	.catch((error) => console.error(error));

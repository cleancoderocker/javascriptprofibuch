const AlbumRepository = require('./AlbumRepository');

module.exports = class FileAlbumRepository extends AlbumRepository {

	save(album) {
		console.log('Saving album to file.');
	}

}

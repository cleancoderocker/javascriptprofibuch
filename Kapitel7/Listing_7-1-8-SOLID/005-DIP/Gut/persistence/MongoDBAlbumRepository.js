const AlbumRepository = require('./AlbumRepository');

module.exports = class MongoDBAlbumRepository extends AlbumRepository {

	save(album) {
		console.log('Saving album to MongoDB.');
	}

}

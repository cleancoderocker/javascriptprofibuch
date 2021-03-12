const Album = require('../model/Album');

module.exports = class AlbumService {

	constructor(repository) {
		this._repository = repository;
	}

	createAlbum(artist, title, year) {
		const album = new Album({artist, title, year});
		this._repository.save(album);
	}

}

module.exports = class ArtistRepository {

	constructor() {
		this.artists = [];
	}

	add(artist) {
		if (!this.contains(artist)) {
			if (artist && artist.name) {
				this.artists.push(artist);
			} else {
				throw new Error('Wrong artist format.');
			}
		}
	}

	contains(newArtist) {
		return this.artists.filter(
			artist => artist.name === newArtist.name
		).length > 0;
	}

	getAll(artist) {
		return this.artists;
	}

	clearAll() {
		this.artists = [];
	}
}

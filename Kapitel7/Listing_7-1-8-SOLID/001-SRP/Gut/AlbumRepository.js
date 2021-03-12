const fs = require('fs');
const path = require('path');

module.exports = class AlbumRepository {

	toFileName(album) {
		return `${album.artist}_${album.title}`;
	}

	save(album) {
		const fileName = this.toFileName(album);
		const file = path.join(__dirname, fileName);
		return new Promise((resolve, reject) => {
			fs.writeFile(file, JSON.stringify(album, null, 2), (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
}

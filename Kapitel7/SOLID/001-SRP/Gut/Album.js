module.exports = class Album {

	constructor({artist, title, year}) {
		this._artist = artist;
		this._title = title;
		this._year = year;
	}

    get artist() {
        return this._artist;
	}
	
	set artist(artist) {
		this._artist = artist;
	}

    get title() {
        return this._title;
	}
	
	set title(title) {
		this._title = title;
	}

    get year() {
        return this._year;
	}
	
	set year(year) {
		this._year = year;
	}

	toJSON() {
		return {
			artist: this.artist,
			title: this.title,
			year: this.year,
		}
	}

}
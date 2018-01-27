(function () {

    const memwatch = require('memwatch-next');
    const hd = new memwatch.HeapDiff();

    class Album {
		constructor(title, year, artist, id, member, price) {
			this.title = title;
			this.year = year;
			this.artist = artist;
			this.id = id;
			this.member = member;
			this.price = price;
		}
	}
	
    const getRandomID = (min, max) => {
        return `${Math.floor(Math.random() * (max - min) + min)}`;
	}
	
    const albums = [];
    for(let i = 0; i < 1000000; i++) {
        albums.push(new Album('Title', 2000, 'Artist', getRandomID(1,10), 'Member' + i, 5.00));
	}
	
    const diff = hd.end();
    console.log(diff.before.size); // 3.93 mb
    console.log(diff.after.size); // 120.93 mb
    console.log(albums.length); // 1000000
})();


(function () {

    const memwatch = require('memwatch-next');
	const hd = new memwatch.HeapDiff();
	
	// Flyweight
	class Album {
		constructor(title, year, artist, id) {
			this.title = title;
			this.year = year;
			this.artist = artist;
			this.id = id;
		}
    }

	// FlyweightFactory
	class AlbumFactory {
		
		constructor() {
			this.existingAlbums = {};
		}

		createAlbum(title, year, artist, id){
			const existingAlbum = this.existingAlbums[id];
			if(existingAlbum) {
				return existingAlbum;
			} else{
				const album = new Album(title, year, artist, id);
				this.existingAlbums[id] =  album;
				return album;
			}
		}

		getNumberOfAlbums() {
			return Object.keys(this.existingAlbums).length;
		}
	}

	class AlbumManager {
		constructor(albumFactory) {
			this.albumFactory = albumFactory;
			this.albumDatabase = {};
		}

		addAlbum(offerID, title, year, artist, id, member, price) {
			const album = this.albumFactory.createAlbum(title, year, artist, id);
			this.albumDatabase[offerID] = {
				member: member,
				price: price,
				album: album
			};
		}

		getNumberOfAlbums() {
			return Object.keys(this.albumDatabase).length;
		}

		updatePrice(offerID, price) {
			const album = this.albumDatabase[offerID];
			album.price = price;
		}
	}

    const getRandomID = (min, max) => {
        return `${Math.floor(Math.random() * (max - min) + min)}`;
	}
	
	const albumFactory = new AlbumFactory();
	const albumManager = new AlbumManager(albumFactory);

    for(let i = 0; i < 1000000; i++) {
        albumManager.addAlbum(i, 'Title', 2000, 'Artist', getRandomID(1,10), 'Member' + i, 5.00);
	}
	
    const diff = hd.end();
    console.log(albumFactory.getNumberOfAlbums()); // 9
    console.log(albumManager.getNumberOfAlbums()); // 1000000
    console.log(diff.before.size); // 4.21 mb
    console.log(diff.after.size); // 98.1 mb
})();
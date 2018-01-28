(function() {
    class RecordStore {

		constructor(name) {
			this.name = name;
			this.albums = [];
			this.next = null;
		}

		setNext(recordStore) {
			this.next = recordStore;
		}

		requestAlbum(albumTitle) {
			if (this.albums.indexOf(albumTitle) >= 0) {
				console.log(`${this.name}: Album habe ich hier`);
			} else {
				console.log(`${this.name}: Album habe ich nicht hier`);
				if (this.next) {
					this.next.requestAlbum(albumTitle);
				}
			}
		}
	}

    // Aufbau der Zuständigkeitskette
    const recordStore1 = new RecordStore('Johnnys Vinyl Kiste');
    const recordStore2 = new RecordStore('Vinyl for all');
    const recordStore3 = new RecordStore('Schallplatten Tauschbörse');
    const recordStore4 = new RecordStore('Olaf der Plattensammler');
    const recordStore5 = new RecordStore('LP und CD Ankauf');
    recordStore1.setNext(recordStore2);
    recordStore2.setNext(recordStore3);
    recordStore3.setNext(recordStore4);
    recordStore4.setNext(recordStore5);
    recordStore5.albums.push('Blues for the red sun');
    recordStore1.requestAlbum('Blues for the red sun');
})();
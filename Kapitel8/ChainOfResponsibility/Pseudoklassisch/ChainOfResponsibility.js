(function() {
    var RecordStore = function(name) {
        this.name = name;
        this.albums = [];
        this.next = null;
        this.setNext = function(recordStore) {
            this.next = recordStore;
        };
        this.requestAlbum = function(albumTitle) {
            if (this.albums.indexOf(albumTitle) >= 0) {
                console.log(this.name + ': Album habe ich hier');
            } else {
                console.log(this.name + ': Album habe ich nicht hier');
                if (this.next) {
                    this.next.requestAlbum(albumTitle);
                }
            }
        };
    }

    // Aufbau der Zuständigkeitskette
    var recordStore1 = new RecordStore('Johnnys Vinyl Kiste');
    var recordStore2 = new RecordStore('Vinyl for all');
    var recordStore3 = new RecordStore('Schallplatten Tauschbörse');
    var recordStore4 = new RecordStore('Olaf der Plattensammler');
    var recordStore5 = new RecordStore('LP und CD Ankauf');
    recordStore1.setNext(recordStore2);
    recordStore2.setNext(recordStore3);
    recordStore3.setNext(recordStore4);
    recordStore4.setNext(recordStore5);
    recordStore5.albums.push('Blues for the red sun');
    recordStore1.requestAlbum('Blues for the red sun');
})();
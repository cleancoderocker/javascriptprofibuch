(function() {
    var Plattenladen = function(name) {
        this.name = name;
        this.albums = [];
        this.next = null;
        this.setNext = function(plattenladen) {
            this.next = plattenladen;
        };
        this.requestAlbum = function(albumTitle) {
            if(this.albums.indexOf(albumTitle) >= 0) {
                console.log(this.name + ': Album habe ich hier');
            } else {
                console.log(this.name + ': Album habe ich nicht hier');
                if(this.next) {
                    this.next.requestAlbum(albumTitle);
                }
            }
        };
    }

    // Aufbau der Zuständigkeitskette
    var plattenladen1 = new Plattenladen('Johnnys Vinyl Kiste');
    var plattenladen2 = new Plattenladen('Vinyl for all');
    var plattenladen3 = new Plattenladen('Schallplatten Tauschbörse');
    var plattenladen4 = new Plattenladen('Olaf der Plattensammler');
    var plattenladen5 = new Plattenladen('LP und CD Ankauf');
    plattenladen1.setNext(plattenladen2);
    plattenladen2.setNext(plattenladen3);
    plattenladen3.setNext(plattenladen4);
    plattenladen4.setNext(plattenladen5);
    plattenladen5.albums.push('Blues for the red sun');
    plattenladen1.requestAlbum('Blues for the red sun');
})();
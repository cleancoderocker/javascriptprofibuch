(function () {

    var memwatch = require('memwatch');
    var hd = new memwatch.HeapDiff();

    function Album(title, year, artist, id, member, price) {
        this.title = title;
        this.year = year;
        this.artist = artist;
        this.id = id;
        this.member = member;
        this.price = price;
    }
    function getRandomID(min, max) {
        return '' + Math.floor(Math.random() * (max - min) + min);
    }
    var albums = [];
    for(var i=0; i<1000000; i++) {
        albums.push(new Album('Title', 2000, 'Artist', getRandomID(1,10), 'Member' + i, 5.00));
    }
    var diff = hd.end();
    console.log(diff.before.size); // 1.46 mb
    console.log(diff.after.size); // 110.81 mb
})();


(function () {

    var memwatch = require('memwatch');
    var hd = new memwatch.HeapDiff();
    // Flyweight
    function Album(title, year, artist, id) {
        this.title = title;
        this.year = year;
        this.artist = artist;
        this.id = id;
    }

    // FlyweightFactory
    var AlbumFactory = (function(){
        var existingAlbums = {};
        return{
            createAlbum: function(title, year, artist, id){
                var existingAlbum = existingAlbums[id];
                if(existingAlbum) {
                    return existingAlbum;
                } else{
                    var album = new Album(title, year, artist, id);
                    existingAlbums[id] =  album;
                    return album;
                }
            },
            getNumberOfAlbums: function() {
                return Object.keys(existingAlbums).length;
            }
        }
    })();

    var AlbumManager = (function () {
        var albumDatabase = {};
        return {
            addAlbum: function(offerID, title, year, artist, id, member, price) {
                var album = AlbumFactory.createAlbum(title, year, artist, id);
                albumDatabase[offerID] = {
                    member: member,
                    price: price,
                    album: album
                };
            },
            getNumberOfAlbums: function() {
                return Object.keys(albumDatabase).length;
            },
            updatePrice: function (offerID, price) {
                var album = albumDatabase[offerID];
                album.price = price;
            }
        };
    })();

    function getRandomID(min, max) {
        return '' + Math.floor(Math.random() * (max - min) + min);
    }
    for(var i=0; i<1000000; i++) {
        AlbumManager.addAlbum(i, 'Title', 2000, 'Artist', getRandomID(1,10), 'Member' + i, 5.00);
    }
    var diff = hd.end();
    console.log(AlbumFactory.getNumberOfAlbums()); // 9
    console.log(AlbumManager.getNumberOfAlbums()); // 1000000
    console.log(diff.before.size); // 1.81 mb
    console.log(diff.after.size); // 88.06 mb
})();
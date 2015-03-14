(function () {
    /* Listing 7.22 */
    function List() {
        this.list = [];
    }
    List.prototype.add = function(object){
        return this.list.push(object);
    };
    List.prototype.count = function(){
        return this.list.length;
    };
    List.prototype.get = function(index){
        if( index > -1 && index < this.list.length ){
            return this.list[index];
        }
    };
    List.prototype.removeAt = function( index ){
        this.list.splice(index, 1);
    };
// Subject
    function Artist(name) {
        this.name = name;
        this.albums = [];
        this.fans = new List();
    }
    Artist.prototype.addFan = function(fan){
        this.fans.add( fan );
    };
    Artist.prototype.removeFan = function(fan){
        this.fans.removeAt(this.fans.indexOf(fan, 0));
    };
    Artist.prototype.newAlbum = function (album) {
        this.albums.push(album);
        this.notifyNewAlbum(album);
    };
    Artist.prototype.notifyNewAlbum = function (album) {
        var fanCount = this.fans.count();
        for (var i = 0; i < fanCount; i++) {
            this.fans.get(i).update(album);
        }
    };
// Observer
    function Person(name) {
        this.name = name;
    }
    Person.prototype.update = function(album){
        console.log(this.name + ": " + album);
    };
    var philip = new Person("Philip");
    var christoph = new Person("Christoph");
    var artist = new Artist("Tool");
    artist.addFan(philip);
    artist.addFan(christoph);
    artist.newAlbum("Lateralus");
})();

(function () {
    /* Listing 7.23 */
    function Artist(name) {
        this.name = name;
        this.albums = [];
    }

    Artist.prototype.addFan = function (fan) {
        Object.observe(this.albums, fan.update.bind(fan));
    };

    Artist.prototype.removeFan = function (fan) {
        Object.unobserve(this.albums, fan.update.bind(fan));
    };

    Artist.prototype.newAlbum = function (album) {
        this.albums.push(album);
    };

    function Person(name) {
        this.name = name;
    }

    Person.prototype.update = function (aenderungen) {
        var that = this;
        aenderungen.forEach(function (aenderung) {
            if (aenderung.type === "add") {
                console.log(that.name + ": " + aenderung.object);
            }
        });

    };

    var philip = new Person("Philip");
    var christoph = new Person("Christoph");
    var artist = new Artist("Tool");
    artist.addFan(philip);
    artist.addFan(christoph);
    artist.newAlbum("Lateralus");
})();

(function() {
    /* Listing 7.24 */
    var events = require('events');
    var artist = new events.EventEmitter();

    function Person(name) {
        this.name = name;
    }

    Person.prototype.update = function(album) {
        console.log(this.name + ': ' + album)
    }

    var philip = new Person('Philip');
    var christoph = new Person('Christoph');

    artist.on('newAlbum', philip.update.bind(philip));
    artist.on('newAlbum', christoph.update.bind(christoph));
    artist.emit('newAlbum', 'Lateralus');
})();
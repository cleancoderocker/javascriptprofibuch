/**
 * Created by philipackermann on 16.05.14.
 */
(function () {
    function List() {
        this.list = [];
    }

    List.prototype.add = function (o) {
        return this.list.push(o);
    };

    List.prototype.count = function () {
        return this.list.length;
    };

    List.prototype.get = function (index) {
        if (index > -1 && index < this.list.length) {
            return this.list[ index ];
        }
    };

    List.prototype.indexOf = function (obj, startIndex) {
        var i = startIndex;
        while (i < this.list.length) {
            if (this.list[i] === obj) {
                return i;
            }
            i++;
        }
        return -1;
    };

    List.prototype.removeAt = function (index) {
        this.list.splice(index, 1);
    };

    function Band(name) {
        this.name = name;
        this.albums = [];
        this.fans = new List();
    }

    Band.prototype.addFan = function (fan) {
        this.fans.add(fan);
    };

    Band.prototype.removeFan = function (fan) {
        this.fans.removeAt(this.observers.indexOf(observer, 0));
    };

    Band.prototype.newAlbum = function (album) {
        this.albums.push(album);
        this.notifyNewAlbum(album);
    };

    Band.prototype.notifyNewAlbum = function (album) {
        var fanCount = this.fans.count();
        for (var i = 0; i < fanCount; i++) {
            this.fans.get(i).update(album);
        }
    };

    function Person(name) {
        this.name = name;
    }

    Person.prototype.update = function (album) {
        console.log(this.name + ": " + album);
    };

    var philip = new Person("Philip");
    var christoph = new Person("Christoph");
    var band = new Band("Tool");
    band.addFan(philip);
    band.addFan(christoph);
    band.newAlbum("Lateralus");

})();

(function () {

    function Band(name) {
        this.name = name;
        this.albums = [];
    }

    Band.prototype.addFan = function (fan) {
        Object.observe(this.albums, fan.update.bind(fan));
    };

    Band.prototype.removeFan = function (fan) {
        Object.unobserve(this.albums, fan.update.bind(fan));
    };

    Band.prototype.newAlbum = function (album) {
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
    var band = new Band("Tool");
    band.addFan(philip);
    band.addFan(christoph);
    band.newAlbum("Lateralus");
})();
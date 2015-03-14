(function () {

    function Album(config) {
        this.name = config.name || "Untitled";
        this.artist = config.artist || "VA";
        this.price = config.price;
        this.getPrice = function() {
            return this.price;
        }
    }

    function sign(funktion, context) {
        var price = funktion.call(context);
        return 2 * price;
    }

    function decorate(decorator, funktion, context) {
        return function() {
            return decorator.call(context, funktion, context);
        }
    }

    var album = new Album({price: 40.0, name: "No more shall we part", artist: "Nick Cave"});
    console.log(album.getPrice());
    album.getPrice = decorate(sign, album.getPrice, album);
    console.log(album.getPrice());
})();

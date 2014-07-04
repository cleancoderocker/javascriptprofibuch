/**
 * Created by philipackermann on 16.05.14.
 */
(function () {

    function Vinyl(config) {
        this.color = config.color || "schwarz";
        this.name = config.name || "Untitled";
        this.artist = config.artist || "VA";
        this.price = config.price;
        this.getPrice = function() {
            return this.price;
        }
    }

    function sign(f, context) {
        var price = f.call(context);
        return 2 * price;
    }

    function decorate(decorator, f, context) {
        return function() {
            return decorator.call(context, f, context);
        }
    }

    var vinyl = new Vinyl({price: 40.0, name: "No more shall we part", artist: "Nick Cave"});
    console.log(vinyl.getPrice());
    vinyl.getPrice = decorate(sign, vinyl.getPrice, vinyl);
    console.log(vinyl.getPrice());
})();

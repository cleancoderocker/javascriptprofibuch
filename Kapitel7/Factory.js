/**
 * Created by philipackermann on 16.05.14.
 */
(function () {

    function Vinyl(config) {
        this.color = config.color || "schwarz";
        this.name = config.name || "Untitled";
        this.artist = config.artist || "VA";
    }

    function LP(config) {
        Vinyl.call(this, config);
        this.diameter = config.diameter || 30;
    }

    LP.prototype = Object.create(Vinyl.prototype);
    LP.prototype.constructor = Vinyl;

    function EP(config){
        Vinyl.call(this, config);
        this.diameter = config.diameter || 17.5;
    }

    EP.prototype = Object.create(Vinyl.prototype);
    EP.prototype.constructor = Vinyl;

    function VinylFactory() {}

    VinylFactory.prototype.vinylClass = LP;

    VinylFactory.prototype.create  = function (config) {
        switch(config.vinylType){
            case "lp":
                this.vinylClass = LP;
                break;
            case "ep":
                this.vinylClass = EP;
                break;
        }
        return new this.vinylClass(config);
    };

    var vinylFactory = new VinylFactory();
    var ep = vinylFactory.create({
        vinylType: "ep",
        color: "yellow"
    });
    console.log(ep instanceof LP);
    console.log(ep);

    var lp = vinylFactory.create({
        vinylType: "lp",
        name: "Third Eye Surgery",
        artist: "Baby Woodrose"
    });
    console.log(lp instanceof EP);
    console.log(lp);
})();

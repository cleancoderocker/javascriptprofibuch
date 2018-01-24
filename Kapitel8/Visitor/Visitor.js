(function() {
    /* Listing 7.35 */
    var Album = function (artist, title, year, price) {
        this.accept = function (visitor) {
            visitor.visit(this);
        };
        this.getPrice = function () {
            return price;
        };
        this.setPrice = function (newPrice) {
            price = newPrice;
        };
        this.toString = function() {
            return artist + ': ' + title + ' (' + year + ') ' + price + '€';
        }
    };

    var Discount = function (discount) {
        this.visit = function (album) {
            album.setPrice(Math.round(album.getPrice() * discount));
        };
    };

    var albums = [
        new Album('The Doors', 'The Doors', 1967, 10),
        new Album('The Doors', 'Strange Days', 1967, 10),
        new Album('The Doors', 'Waiting for the Sun', 1968, 10),
        new Album('The Doors', 'The Soft Parade', 1969, 10)
    ];

    var visitorDiscount = new Discount(0.8);
    albums.forEach(function(album) {
        album.accept(visitorDiscount);
        console.log(album.toString());
    });
})();

(function() {
    /* Listing 7.36 */
    var Album = function (artist, title, year, price) {
        this.getPrice = function () {
            return price;
        };
        this.setPrice = function (newPrice) {
            price = newPrice;
        };
        this.toString = function() {
            return artist + ': ' + title + ' (' + year + ') ' + price + '€';
        }
    };

    var albums = [
        new Album('The Doors', 'The Doors', 1967, 10),
        new Album('The Doors', 'Strange Days', 1967, 10),
        new Album('The Doors', 'Waiting for the Sun', 1968, 10),
        new Album('The Doors', 'The Soft Parade', 1969, 10)
    ];

    Album.prototype.setDiscount = function(discount) {
        this.setPrice(Math.round(this.getPrice() * discount));
    };

    albums.forEach(function(album) {
        album.setDiscount(0.8);
        console.log(album.toString());
    });
})();

(function() {
    /* Listing 7.37 */
    var Album = function (artist, title, year, price) {
        this.getPrice = function () {
            return price;
        };
        this.setPrice = function (newPrice) {
            price = newPrice;
        };
        this.toString = function() {
            return artist + ': ' + title + ' (' + year + ') ' + price + '€';
        }
    };

    var albums = [
        new Album('The Doors', 'The Doors', 1967, 10),
        new Album('The Doors', 'Strange Days', 1967, 10),
        new Album('The Doors', 'Waiting for the Sun', 1968, 10),
        new Album('The Doors', 'The Soft Parade', 1969, 10)
    ];

    function extend(ziel, quelle) {
        ziel = ziel || {};
        for(var eigenschaft in quelle) {
            if(quelle.hasOwnProperty(eigenschaft)) {
                ziel[eigenschaft] = quelle[eigenschaft];
            }
        }
        return ziel;
    }

    var Discount = {
        setDiscount: function(discount) {
            this.setPrice(Math.round(this.getPrice() * discount));
        }
    }

    albums.forEach(function(album) {
        extend(album, Discount);
        album.setDiscount(0.8);
        console.log(album.toString());
    });
})();
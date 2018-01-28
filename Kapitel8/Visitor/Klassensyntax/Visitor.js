(function() {

	class Album {

		constructor(artist, title, year, price) {
			this.artist = artist;
			this.title = title;
			this.year = year;
			this.price = price;
		}

		accept(visitor) {
            visitor.visit(this);
		}
		
        getPrice() {
            return this.price;
		}
		
        setPrice(newPrice) {
            this.price = newPrice;
		}
		
        toString() {
            return `${this.artist}: ${this.title} (${this.year}) ${this.price}€`;
        }
	}

	class Discount {

		constructor(discount) {
			this.discount = discount;
		}

		visit(album) {
            album.setPrice(Math.round(album.getPrice() * this.discount));
        }
	}

    const albums = [
        new Album('The Doors', 'The Doors', 1967, 10),
        new Album('The Doors', 'Strange Days', 1967, 10),
        new Album('The Doors', 'Waiting for the Sun', 1968, 10),
        new Album('The Doors', 'The Soft Parade', 1969, 10)
    ];

    const visitorDiscount = new Discount(0.8);
    albums.forEach((album) => {
        album.accept(visitorDiscount);
        console.log(album.toString());
    });
})();

(function() {

	class Album {

		constructor(artist, title, year, price) {
			this.artist = artist;
			this.title = title;
			this.year = year;
			this.price = price;
		}
		
        getPrice() {
            return this.price;
		}
		
        setPrice(newPrice) {
            this.price = newPrice;
		}
		
        toString() {
            return `${this.artist}: ${this.title} (${this.year}) ${this.price}€`;
        }
	}

    const albums = [
        new Album('The Doors', 'The Doors', 1967, 10),
        new Album('The Doors', 'Strange Days', 1967, 10),
        new Album('The Doors', 'Waiting for the Sun', 1968, 10),
        new Album('The Doors', 'The Soft Parade', 1969, 10)
    ];

    Album.prototype.setDiscount = function(discount) {
        this.setPrice(Math.round(this.getPrice() * discount));
    };

    albums.forEach((album) => {
        album.setDiscount(0.8);
        console.log(album.toString());
    });
})();

(function() {

	class Album {

		constructor(artist, title, year, price) {
			this.artist = artist;
			this.title = title;
			this.year = year;
			this.price = price;
		}
		
        getPrice() {
            return this.price;
		}
		
        setPrice(newPrice) {
            this.price = newPrice;
		}
		
        toString() {
            return `${this.artist}: ${this.title} (${this.year}) ${this.price}€`;
        }
	}

    const albums = [
        new Album('The Doors', 'The Doors', 1967, 10),
        new Album('The Doors', 'Strange Days', 1967, 10),
        new Album('The Doors', 'Waiting for the Sun', 1968, 10),
        new Album('The Doors', 'The Soft Parade', 1969, 10)
    ];

    const extend = (target, source) => {
        target = target || {};
        for(let property in source) {
            if(source.hasOwnProperty(property)) {
                target[property] = source[property];
            }
        }
        return target;
    }

    const Discount = {
        setDiscount(discount) {
            this.setPrice(Math.round(this.getPrice() * discount));
        }
    }

    albums.forEach((album) => {
        extend(album, Discount);
        album.setDiscount(0.8);
        console.log(album.toString());
    });
})();
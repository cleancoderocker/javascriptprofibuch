(function () {

    class Album {

		constructor(config) {
			this.name = config.name || "Untitled";
			this.artist = config.artist || "VA";
			this.price = config.price;
		}

		getPrice() {
			return this.price;
		}

    }

    const sign = (aFunction, context) => {
        const price = aFunction.call(context);
        return 2 * price;
    }

	const decorate = (decorator, aFunction, context) => 
		() => decorator.call(context, aFunction, context);

    const album = new Album({price: 40.0, name: "No more shall we part", artist: "Nick Cave"});
    console.log(album.getPrice());
    album.getPrice = decorate(sign, album.getPrice, album);
    console.log(album.getPrice());
})();

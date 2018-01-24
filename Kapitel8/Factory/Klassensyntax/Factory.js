(function () {

	class Vinyl {
		constructor(config) {
			this.color = config.color || 'schwarz';
			this.name = config.name || 'Untitled';
			this.artist = config.artist || 'VA';
		}
	}

    class LP extends Vinyl {
        constructor(config) {
			super(config);
			this.diameter = config.diameter || 30;
		}
    }

    class EP extends Vinyl {
		constructor(config) {
			super(config);
			this.diameter = config.diameter || 17.5;
		}
	}

    class VinylFactory {
		constructor() {
			this.vinylClass = LP;
		}

		create(config) {
			switch(config.vinylType){
				case 'lp':
					this.vinylClass = LP;
					break;
				case 'ep':
					this.vinylClass = EP;
					break;
			}
			return new this.vinylClass(config);
		};
	}

    const vinylFactory = new VinylFactory();
    const ep = vinylFactory.create({
        vinylType: 'ep',
        color: 'yellow'
    });

    const lp = vinylFactory.create({
        vinylType: 'lp',
        name: 'Third Eye Surgery',
        artist: 'Baby Woodrose'
    });

    console.log(ep instanceof EP);  // true
    console.log(ep.diameter);       // 17.5
    console.log(lp instanceof LP);  // true
    console.log(lp.diameter);       // 30
})();

(function() {
	// Originator
	class Artist {

		constructor(name, genre) {
			this.name = name;
			this.genre = genre;
		}

		saveToMemento() {
            // Memento
            const memento = JSON.stringify(this);
            return memento;
		}
		
        replaceFromMemento(memento) {
            // Memento
            const m = JSON.parse(memento);
            this.name = m.name;
            this.genre = m.genre;
        }

	}

	// Caretaker
	class ArtistStorage {

		constructor() {
			this.mementos = new Map();
		}

        add(key, memento) {
            this.mementos.set(key, memento);
		}
		
        get(key) {
            return this.mementos.get(key);
        }

	}

    const kyuss = new Artist('Kyuss', 'Stonerrock');
    const monsterMagnet = new Artist('Monster Magnet', 'Spacerock');
	const artistStorage = new ArtistStorage();
	// Artist { name: 'Kyuss', genre: 'Stonerrock' }
	console.log(kyuss);
	// Artist { name: 'Monster Magnet', genre: 'Spacerock' }
    console.log(monsterMagnet);
    artistStorage.add(1, kyuss.saveToMemento());
    artistStorage.add(2, monsterMagnet.saveToMemento());
    kyuss.genre = 'Klassik';
	monsterMagnet.genre = 'Blues';
	// Artist { name: 'Kyuss', genre: 'Klassik' }
	console.log(kyuss);
	// { name: 'Monster Magnet', genre: 'Blues' }
    console.log(monsterMagnet);
    kyuss.replaceFromMemento(artistStorage.get(1));
	monsterMagnet.replaceFromMemento(artistStorage.get(2));
	// Artist { name: 'Kyuss', genre: 'Stonerrock' }
	console.log(kyuss);
	// Artist { name: 'Monster Magnet', genre: 'Spacerock' }
    console.log(monsterMagnet);
})();
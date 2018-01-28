(function() {
    // Originator
    var Artist = function(name, genre) {
        this.name = name;
        this.genre = genre;
    }
    Artist.prototype = {
        saveToMemento: function() {
            // Memento
            var memento = JSON.stringify(this);
            return memento;
        },
        replaceFromMemento: function(memento) {
            // Memento
            var m = JSON.parse(memento);
            this.name = m.name;
            this.genre = m.genre;
        }
    }

    // Caretaker
    var ArtistStorage = function() {
        this.mementos = {};
        this.add = function(key, memento) {
            this.mementos[key] = memento;
        },
        this.get = function(key) {
            return this.mementos[key];
        }
    }

    var kyuss = new Artist('Kyuss', 'Stonerrock');
    var monsterMagnet = new Artist('Monster Magnet', 'Spacerock');
	var artistStorage = new ArtistStorage();
	// { name: 'Kyuss', genre: 'Stonerrock' }
	console.log(kyuss);
	// { name: 'Monster Magnet', genre: 'Spacerock' }
    console.log(monsterMagnet);
    artistStorage.add(1, kyuss.saveToMemento());
    artistStorage.add(2, monsterMagnet.saveToMemento());
    kyuss.genre = 'Klassik';
	monsterMagnet.genre = 'Blues';
	// { name: 'Kyuss', genre: 'Klassik' }
	console.log(kyuss);
	// { name: 'Monster Magnet', genre: 'Blues' }
    console.log(monsterMagnet);
    kyuss.replaceFromMemento(artistStorage.get(1));
	monsterMagnet.replaceFromMemento(artistStorage.get(2));
	// { name: 'Kyuss', genre: 'Stonerrock' }
	console.log(kyuss);
	// { name: 'Monster Magnet', genre: 'Spacerock' }
    console.log(monsterMagnet);
})();
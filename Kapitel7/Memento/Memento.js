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
    console.log(kyuss); // { name: 'Kyuss', genre: 'Stonerrock' }
    console.log(monsterMagnet); // { name: 'Monster Magnet', genre: 'Spacerock' }
    artistStorage.add(1, kyuss.saveToMemento());
    artistStorage.add(2, monsterMagnet.saveToMemento());
    kyuss.genre = 'Klassik';
    monsterMagnet.genre = 'Blues';
    console.log(kyuss); // { name: 'Kyuss', genre: 'Klassik' }
    console.log(monsterMagnet); // { name: 'Monster Magnet', genre: 'Blues' }
    kyuss.replaceFromMemento(artistStorage.get(1));
    monsterMagnet.replaceFromMemento(artistStorage.get(2));
    console.log(kyuss); // { name: 'Kyuss', genre: 'Stonerrock' }
    console.log(monsterMagnet); // { name: 'Monster Magnet', genre: 'Spacerock' }
})();
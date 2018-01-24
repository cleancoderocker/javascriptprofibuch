(function() {
    /* Listing 7.19 */
    /* Funktioniert nur in ES6 */
    let interpreten = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet'];
    let interpretenWrapper = {}
    interpretenWrapper.interpreten = interpreten;
    interpretenWrapper[Symbol.iterator] = function() {
        var interpreten = this.interpreten;
        var zaehler = this.interpreten.length-1;
// Rückgabe des Iterator-Objekts
        return {
            next: function(){
                if (zaehler < 0) {
                    return {
                        done: true
                    };
                } else {
                    return {
                        value: interpreten[zaehler--],
                        done: false
                    };
                }
            }
        }
    };
    var iterator = interpreten[Symbol.iterator]();
    for(let interpret of iterator) {
        console.log(interpret);
    }
})();

(function() {
    /* Listing 7.20 */
    var Iterator = function(elements) {
        this.index = 0;
        this.elements = elements;
    }
    Iterator.prototype.next = function() {
        return this.elements[this.index++];
    }
    Iterator.prototype.hasNext = function() {
        return this.index < this.elements.length;
    }
    var artists = ['Ben Harper', 'Sprititual Beggars', 'Monster Magnet', 'Queens of the Stone Age'];
    var iterator = new Iterator(artists);
    while(iterator.hasNext()) {
        console.log(iterator.next());
    }
})();

(function() {
    /* Listing 7.21 */
    /* Funktioniert nur in einer Laufzeitumgebung, in der das DOM über das document-Objekt zur Verfügung steht */
    var Iterator = function(node) {
        this.index = 0;
        this.elements = Array.prototype.slice.call(node.attributes);
    }
    Iterator.prototype.next = function() {
        return this.elements[this.index++];
    }
    Iterator.prototype.hasNext = function() {
        return this.index < this.elements.length;
    }
    var element = document.createElement('div');
    element.setAttribute('id', 'button');
    element.setAttribute('class', 'submit');
    var iterator = new Iterator(element);
    while(iterator.hasNext()) {
        console.log(iterator.next());
    }
})();
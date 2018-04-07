(function() {
	const artists = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet'];
	const artistsWrapper = {}
	artistsWrapper.artists = artists;
	artistsWrapper[Symbol.iterator] = function() {
	  const artists = this.artists;
	  let counter = this.artists.length-1;
	  // Rückgabe des Iterator-Objekts
	  return {
		next: function(){
		  if (counter< 0) {
			return {
			  done: true
			};
		  } else {
			return {
			  value: artists[counter--], 
			  done: false
			};
		  }
		}
	  }
	};
	for(let artist of artistsWrapper) {
	  console.log(artist);
	}	
})();

(function() {
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
    // /* Funktioniert nur in einer Laufzeitumgebung, in der das DOM über das document-Objekt zur Verfügung steht */
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

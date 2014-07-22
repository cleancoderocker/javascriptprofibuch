(function() {
    var person = {
        name: 'Max', // Objektvariable
        getName: function() {
            return this.name;
        }
    }
    console.log(person.getName());

    var name = "globaler Name";
    function getName() {
        return this.name;
    }
    console.log(getName());
    console.log(getName.bind(person)());


    var getPersonName = person.getName;
    console.log(getPersonName());
})();

(function() {
    name = "globaler Name";
    function getGlobalName() {
        return this.name;
    }
    console.log(getGlobalName());
})();

(function() {
    "use strict";
    name = "globaler Name";
    function getGlobalName() {
        return this.name;
    }
    // console.log(getGlobalName());
    var person2 = {
        name : 'Moritz',
        getName : getGlobalName
    }

    var wuestenrockKoenige = {
        name : 'Kyuss',
        getName : getGlobalName
    }
    console.log(person2.getName()); // Ausgabe: Moritz
    console.log(wuestenrockKoenige.getName()); // Ausgabe: Kyuss

})();

(function() {
    var band = {
        name: 'Kyuss',
        callback: null,
        newAlbum: function(title) {
            this.callback(title);
        }
    }
    var person = {
        name: 'Max',
        kaufen: function(title) {
            console.log(this.name + ' kauft sich das neue Album "' + title + '"');
        }
    }
    band.callback = person.kaufen;
    band.newAlbum('Sky Valley');
})();

(function() {

    var person = {
        name: 'Max',
        nachname: 'Mustermann',
        toString: function() {
            return this.name + " " + this.nachname;
        }
    }

    function eineFunktion(callback) {
        if(typeof callback === "function") {
            console.log(callback());
        }
    }

    eineFunktion(person.toString);

})();

(function() {

    var person = {
        name: 'Max',
        nachname: 'Mustermann',
        toString: function() {
            return this.name + " " + this.nachname;
        }
    }

    function eineFunktion(callback, objekt) {
        if(typeof callback === "function") {
            console.log(callback.apply(objekt));
        }
    }

    eineFunktion(person.toString, person);

    eineFunktion(function() {
        return 4711;
    });

})();
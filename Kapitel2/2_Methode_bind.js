// Falsch
(function() {

    var person = {
        name : 'Max',
        getName : function() {
            return this.name;
        }
    }

    var personGetName = person.getName;
    console.log(personGetName());

})();

// Richtig
(function() {

    var person = {
        name : 'Max',
        getName : function() {
            return this.name;
        }
    }

    var personGetName = person.getName.bind(person);
    console.log(personGetName());

})();
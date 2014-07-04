(function() {
    function getName() {
        return this.name;
    }

    var person = {
        name : 'Max',
        getName : getName
    }

    var interpret = {
        name : 'Kyuss',
        getName : getName
    }

    console.log(person.getName());
    console.log(interpret.getName());
})();
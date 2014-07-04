(function() {

    var name = "Name";

    function getName() {
        return this.name;
    }

    var person = {
        name : 'Max',
    }

    console.log(name);
    console.log(getName.apply(person));

})();
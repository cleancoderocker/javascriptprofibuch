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


// 1
var getPersonName = person.getName;
console.log(getPersonName());

// 2
var schaltflaeche = {
    click: function(callback) {
        callback();
    }
}
var controller = {
    clickHandler: function() {
        this.log();
    },
    log: function() {
        console.log("clicked");
    }
}
schaltflaeche.click(controller.clickHandler);
schaltflaeche.click(controller.clickHandler.bind(controller));

// 3

// 4

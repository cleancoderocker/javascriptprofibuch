function Person(name) {
    this.getName = function() {
        return name;
    };
}
var max = new Person('Max');
var moritz = new Person('Moritz');


function Person(name) {
    this._name = name;
}

Person.prototype.getName = function() {
    return this._name;
};
var max = new Person('Max');
var moritz = new Person('Moritz');


var Person = (function() {

    var name;

    function Person(name) {
        name = name;
    }

    Person.prototype.getName = function() {
        return name;
    };

    return Person;
}());
var max = new Person('Max');
var moritz = new Person('Moritz');
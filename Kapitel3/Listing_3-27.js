function extend(ziel, quelle) {
    ziel = ziel || {};
    for(var eigenschaft in quelle) {
        if(quelle.hasOwnProperty(eigenschaft)) {
            ziel[eigenschaft] = quelle[eigenschaft];
        }
    }
    return ziel;
}
var person = {
    name: 'Max',
    getName: function() {
        return this.name;
    }
};
var hund = {
    name: 'Bello',
    bellen: function() {
        console.log('Wau wau');
    }
}
extend(hund, person);
person.getName = function() {
    console.log('getName() überschrieben');
    return this.name;
}
console.log(person.getName());// erst 'getName() überschrieben', dann 'Max'
console.log(hund.getName()); // 'Bello'
/* Funktioniert nur in ES6 */
let profiler = {
    anzahlZugriffe: 0,
    get: function(proxy, name) {
        this.anzahlZugriffe++;
        return proxy[name];
    },
    getAnzahlZugriffe: function() {
        return this.anzahlZugriffe;
    }
}
let person = Proxy({}, profiler);
person.name = 'Max';
for(let i=0; i<9; i++) {
    console.log(person.name);
}
console.log(profiler.getAnzahlZugriffe());
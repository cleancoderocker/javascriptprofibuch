(function() {
    /* Listing 7.17 */
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
})();

(function() {
    /* Listing 7.18 */
    var zielObjekt = {"name" : "Max"};
    var proxy = Object.create(Object.getPrototypeOf(zielObjekt), {});
    Object.getOwnPropertyNames(zielObjekt).forEach(function(eigenschaft) {
        var pd = Object.getOwnPropertyDescriptor(zielObjekt, eigenschaft);
        Object.defineProperty(proxy, eigenschaft, {
            set: function(wert) {
                console.log('setze ' + wert + ' für Eigenschaft ' + eigenschaft);
                zielObjekt[eigenschaft] = wert;
            },
            get: function() {
                console.log('liefere ' + zielObjekt[eigenschaft] +
                ' von Eigenschaft ' + eigenschaft);
                return zielObjekt[eigenschaft];
            }
        });
// Kopieren der Property-Decriptor-Attribute
        return proxy;
    });
    console.log(proxy.name); // 'Max'
    zielObjekt.nachname = 'Mustermann';
    console.log(proxy.nachname); // undefined
})();
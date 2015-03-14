/* Funktioniert nur in ES6 */
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
            console.log('liefere ' +
            zielObjekt[eigenschaft] + ' von Eigenschaft ' + eigenschaft);
            return zielObjekt[eigenschaft];
        }
    });
// Kopieren der Property-Decriptor-Attribute
    return proxy;
});
console.log(proxy.name); // 'Max'
zielObjekt.nachname = 'Mustermann';
console.log(proxy.nachname); // undefined
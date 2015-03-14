/* Funktioniert nur in ES6 */
let handler = {
    set: function(zielObjekt, eigenschaft, wert) {
        console.log('setze ' + wert + ' für Eigenschaft ' + eigenschaft);
        zielObjekt[eigenschaft] = wert;
    },
    get: function(zielObjekt, eigenschaft) {
        console.log('liefere ' + zielObjekt[eigenschaft] +
        ' von Eigenschaft ' + eigenschaft);
        return zielObjekt[eigenschaft];
    }
}
/* Funktioniert nur in ES6 */
var zielObjekt = {};
var handler = {/*...*/}; // Wird gleich implementiert
var proxy = Proxy(zielObjekt, handler);
proxy.name = 'Max'; // Aufruf set() von handler
proxy.nachname = 'Mustermann'; // Aufruf set() von handler
console.log(proxy.name); // Aufruf get() von handler
console.log(proxy.nachname); // Aufruf get() von handler
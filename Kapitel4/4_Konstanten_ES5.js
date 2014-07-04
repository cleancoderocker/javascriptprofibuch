var KONSTANTE = 44;
KONSTANTE = 4711;


var konstanten = {};
Object.defineProperty(konstanten, 'KONSTANTE', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 44
});
konstanten.KONSTANTE = 4711;


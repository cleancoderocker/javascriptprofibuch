var constants = {};
Object.defineProperty(constants, 'MAXIMUM', {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 44
});
constants.MAXIMUM = 4711; // ohne Wirkung
console.log(constants.MAXIMUM); // Ausgabe: 44

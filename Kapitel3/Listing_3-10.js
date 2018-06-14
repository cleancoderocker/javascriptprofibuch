const max = Object.create(Object.prototype, {
  firstName: {
    value: 'Max',
    writable: false,
    configurable: true,
    enumerable: true
  },
  lastName: {
    value: 'Mustermann',
    writable: true,
    configurable: true,
    enumerable: true
  }
});
console.dir(max);

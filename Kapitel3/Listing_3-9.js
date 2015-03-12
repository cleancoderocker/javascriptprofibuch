var max = Object.create(Object.prototype, {
    name: {
        value: 'Max',
        writable: false,
        configurable: true,
        enumerable: true
    },
    nachname: {
        value: 'Mustermann',
        writable: true,
        configurable: true,
        enumerable: true
    }
});
console.dir(max);
const target = {};
const handler = {
  set(target, property, value) {
    console.log('setze ' + value + ' für Eigenschaft ' + property);
    target[property] = value;
  },
  get(target, property) {
    console.log('liefere ' + target[property] + ' von Eigenschaft ' + property);
    return target[property];
  }
};
const proxy = new Proxy(target, handler);
proxy.firstName = 'Max'; // Aufruf set() von handler
proxy.lastName = 'Mustermann'; // Aufruf set() von handler
console.log(proxy.firstName); // Aufruf get() von handler
console.log(proxy.lastName); // Aufruf get() von handler

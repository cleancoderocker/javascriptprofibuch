const profiler = {
  counter: 0,
  get(proxy, name) {
    this.counter++;
    return proxy[name];
  },
  getCounter() {
    return this.counter;
  }
};
const person = new Proxy({}, profiler);
person.firstName = 'Max';
for (let i = 0; i < 9; i++) {
  console.log(person.firstName);
}
console.log(profiler.getCounter()); // Ausgabe: 9

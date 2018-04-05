const s1 = require('./Singleton');
const s2 = require('./Singleton');

console.log(s1.getRandomNumber());
console.log(s2.getRandomNumber());
console.log(s1.getRandomNumber() === s2.getRandomNumber()); // true

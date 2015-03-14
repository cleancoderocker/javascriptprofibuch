/* Funktioniert nur in ES6 */
var interpreten = new Set();
interpreten.add('Kyuss');
interpreten.add('Kyuss');
interpreten.add('Tool');
interpreten.add('Monster Magnet');
interpreten.add('Ben Harper');
console.log(interpreten.size); // 4
console.log(interpreten.has('Kyuss')); // true
console.log(interpreten.has('Justin Bieber')); // false
/* Funktioniert nur in ES6 */
var interpreten = new Set();
interpreten.add('Kyuss');
interpreten.add('Kyuss');
interpreten.add('Tool');
interpreten.add('Monster Magnet');
interpreten.add('Ben Harper');
interpreten.add('Coldplay'); // Bitte nicht
console.log(interpreten.size); // 5
interpreten.delete('Coldplay');
console.log(interpreten.size); // 4
interpreten.clear();
console.log(interpreten.size); // 0
var interpreten = new Set();
interpreten.add('Kyuss');
interpreten.add('Tool');
interpreten.add('Monster Magnet');
interpreten.add('Ben Harper');
console.log(interpreten.size);
console.log(interpreten.has('Kyuss'));
console.log(interpreten.has('Justin Bieber'));

interpreten.add('Coldplay');
console.log(interpreten.size);
interpreten.delete('Coldplay');
console.log(interpreten.size);
interpreten.clear();
console.log(interpreten.size);

for (let interpret of interpreten) {
    console.log(interpret);
}

var interpreten2 = new Set(['Kyuss', 'Kyuss', 'Tool', 'Monster Magnet', 'Ben Harper']);console.log(interpreten2);
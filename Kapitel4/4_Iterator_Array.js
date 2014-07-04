var interpreten = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet']
var iterator = Iterator(interpreten);
var interpret = iterator.next();
console.log(interpret[0]); // 0
console.log(interpret[1]); // Kyuss
interpret = iterator.next();
console.log(interpret[0]); // 1
console.log(interpret[1]); // QOTSA
interpret = iterator.next();
console.log(interpret[0]); // 2
console.log(interpret[1]); // Ben Harper
interpret = iterator.next();
console.log(interpret[0]); // 3
console.log(interpret[1]); // Monster Magnet
interpret = iterator.next(); // StopIteration
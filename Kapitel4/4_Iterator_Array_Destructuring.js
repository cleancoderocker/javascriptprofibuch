var interpreten = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet']
var iterator = Iterator(interpreten);
for(let [,interpret] in iterator) {
    console.log(interpret);
}

var album = {
    interpret: 'Kyuss',
    titel: 'Sky Valley',
    jahr: 1994,
    format: 'LP'
}
var iterator = Iterator(album);
var eigenschaft = iterator.next();
console.log(eigenschaft[0]); // interpret
console.log(eigenschaft[1]); // Kyuss
eigenschaft = iterator.next();
console.log(eigenschaft[0]); // titel
console.log(eigenschaft[1]); // Sky Valley
eigenschaft = iterator.next();
console.log(eigenschaft[0]); // jahr
console.log(eigenschaft[1]); // 1994
eigenschaft = iterator.next();
console.log(eigenschaft[0]); // format
console.log(eigenschaft[1]); // LP
iterator.next(); // StopIteration
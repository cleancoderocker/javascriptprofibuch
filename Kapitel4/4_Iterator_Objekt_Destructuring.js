var album = {
    interpret: 'Kyuss',
    titel: 'Sky Valley',
    jahr: 1994,
    format: 'LP'
}
var iterator = Iterator(album);
for(let [name,eigenschaft] in iterator) {
    console.log(name + ': ' + eigenschaft);
}

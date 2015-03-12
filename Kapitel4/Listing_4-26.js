function addiere(x,y,z) {
    return x + y + z;
}
var zahlen = [2,3,4];
addiere.apply(null, zahlen);
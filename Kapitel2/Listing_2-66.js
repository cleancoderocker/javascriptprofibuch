function volumen(x, y, z) {
    return x * y * z;
}
function volumenX(x) {
    return function(y, z) {
        return volumen(x, y, z);
    }
}
var volumenX5 = volumenX(5);
console.log(volumenX5(2, 2));
console.log(volumenX5(3, 3));
console.log(volumenX5(4, 4));
console.log(volumenX5(5, 5));
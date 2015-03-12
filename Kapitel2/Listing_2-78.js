function volumen(x, y, z) {
    return x * y * z;
}
function volumenCurry(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}
console.log(volumenCurry(5)(5)(5));
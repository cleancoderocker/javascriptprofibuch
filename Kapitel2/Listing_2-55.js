var komposition2 = function(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
};
function plusVier(x) {
    return x + 4;
}
function malSieben(x) {
    return x * 7;
}
var plusVierMalSieben = komposition2(malSieben, plusVier);
var malSiebenPlusVier = komposition2(plusVier, malSieben);
console.log(plusVierMalSieben(2)); // 42
console.log(malSieben(plusVier(2))); // 42
console.log(malSiebenPlusVier(2)); // 18
console.log(plusVier(malSieben(2))); // 18
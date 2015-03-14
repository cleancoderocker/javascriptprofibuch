function plusVier(x) {
    return x + 4;
}
function malSieben(x) {
    return x * 7;
}
var komposition3 = function() {
    var funktionen = arguments;
    return function() {
        var args = arguments;
        for (var i = funktionen.length; i-- > 0;) {
            args = [funktionen[i].apply(this, args)];
        }
        return args[0];
    };
};
var plusAchtMalSieben = komposition3(malSieben, plusVier, plusVier);
console.log(plusAchtMalSieben(2));
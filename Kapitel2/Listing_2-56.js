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
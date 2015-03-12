var komposition1 = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};
function operationenFabrik(name) {
    switch(name) {
        case 'addition': return function(x, y) {
            return x + y;
        }
        case 'subtraktion': return function(x, y) {
            return x - y;
        }
        case 'multiplikation': return function(x, y) {
            return x * y;
        }
        case 'division': return function(x, y) {
            return x / y;
        }
        default: return function() {
            return NaN;
        }
    }
}
console.log(operationenFabrik('addition')(2,2));
console.log(operationenFabrik('subtraktion')(2,2));
console.log(operationenFabrik('multiplikation')(2,2));
console.log(operationenFabrik('division')(2,2));
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
var addition = operationenFabrik('addition');
console.log(addition(2, 2));
var subtraktion = operationenFabrik('subtraktion');
console.log(subtraktion(2, 2));
var multiplikation = operationenFabrik('multiplikation');
console.log(multiplikation(2, 2));
var division = operationenFabrik('division');
console.log(division(2, 2));
var nichts = operationenFabrik('nichts');
console.log(nichts(2, 2));
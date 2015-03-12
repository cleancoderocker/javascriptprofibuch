function addition(x,y) {
    return x+y;
}
function subtraktion(x,y) {
    return x-y;
}
function multiplikation(x,y) {
    return x*y;
}
function division(x,y) {
    return x/y;
}
var operationen = [
    addition,
    subtraktion,
    multiplikation,
    division
];
var operation;
for(var i=0; i<operationen.length; i++) {
    operation = operationen[i];
    console.log(operation(2,2));
}
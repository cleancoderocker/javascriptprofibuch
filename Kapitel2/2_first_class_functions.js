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

addition(2,2);
var operation = addition;
operation(2,2);

var operationen = [addition, subtraktion, multiplikation, division];var operation;for(var index in operationen) {  operation = operationen[index];  console.log(operation(2,2));}

function metaOperation(operation, x, y) {
  return operation(x,y);
}
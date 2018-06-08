function returnFour() {
  return 4;
}
function alsoReturnFour() {
  return 4;
}
const s = 4;
switch (s) {
  case returnFour():
    console.log('returnFour()');
    break;
  case alsoReturnFour():
    console.log('alsoReturnFour()');
    break;
  default:
    console.log('nichts');
}
// Ausgabe des Programms: "returnFour()"

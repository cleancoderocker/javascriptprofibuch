function aFunction(callback) {
  // hier weiterer Code
  console.log('Vor Callback');
  callback();
  console.log('Nach Callback');
  // hier weiterer Code
}

function anotherFunction() {
  console.log('Callback');
}
aFunction(anotherFunction);
// Ausgabe:
// "Vor Callback"
// "Callback"
// "Nach Callback"

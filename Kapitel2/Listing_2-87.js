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
  // Achtung: Fehler, da der Rückgabewert von anotherFunction() zurückgegeben wird
  // TypeError: callback is not a function
  aFunction(anotherFunction());
  
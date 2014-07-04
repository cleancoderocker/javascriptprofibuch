function asynchroneFunktion() {
  var promise = new Promise(
    function(resolve, reject) {
      window.setTimeout(
        function() {
          var ergebnis = 4711
          console.log(ergebnis);
          resolve(ergebnis); // Asynchrone Operation mit Ergebniswert
        }, Math.random() * 2000);
    }
  );
  return promise;
}

function asynchroneFunktion2() {
  var promise = new Promise(
    function(resolve, reject) {
      window.setTimeout(
        function() {
          resolve(); // Asynchrone Operation ohne Ergebniswert
        }, Math.random() * 2000);
    }
  );
  return promise;
}

asynchroneFunktion()
.then(function(ergebnis) { // Callback mit Parameter
  console.log('Callback 1: ' + ergebnis);
  return asynchroneFunktion2()
})
.then(function(ergebnis) { // Callback ohne Parameter
  console.log('Callback 2');
});


var p1 = asynchroneFunktion();
var p2 = p1.then(function(ergebnis) {
  console.log('Callback 1: ' + ergebnis);
  var p4 = asynchroneFunktion2();
  return p4;
});
var p3 = p2.then(function(ergebnis) {
  console.log('Callback 2');
});






(function() {
  const x = 11;
  if (x < 20) {
    (function() {
      const x = 4;
      console.log(x); // Ausgabe: 4
    })();
  }
  if (x > 2) {
    (function() {
      const x = 7;
      console.log(x); // Ausgabe: 7
    })();
  }
  console.log(x); // Ausgabe: 11
})();

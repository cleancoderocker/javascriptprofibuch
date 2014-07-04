function asynchroneOperation() {
  var ergebnis;
  window.setTimeout(
    function() {
      ergebnis = 4711;
    }, Math.random() * 2000 + 1000);
  return ergebnis;
}
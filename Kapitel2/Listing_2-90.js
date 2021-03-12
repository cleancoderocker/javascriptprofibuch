function sum(x, y, callback) {
  const result = x + y;
  if (typeof callback === 'function') {
    callback(result);
  }
}
sum(2, 2, function(result) {
  console.log(`Das Ergebnis lautet: ${result}`);
});
// Oder als Arrow Function:
sum(2, 2, result => {
  console.log(`Das Ergebnis lautet: ${result}`);
});

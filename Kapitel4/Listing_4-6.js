function test() {
  var result = [];
  for (var i = 1; i < 11; i++) {
    var number = i;
    result[i] = (function(number2) {
      return function() {
        return number2;
      };
    })(number);
  }
  result.forEach(function(numberFunction) {
    console.log(numberFunction());
  });
}
test(); // Ausgabe: nacheinander die Zahlen 1 bis 10

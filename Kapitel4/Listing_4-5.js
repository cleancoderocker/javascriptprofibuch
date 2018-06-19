function test() {
  var number;
  var result = [];
  for (var i = 1; i < 11; i++) {
    number = i;
    result[i] = function() {
      return number;
    };
  }
  result.forEach(function(numberFunction) {
    console.log(numberFunction());
  });
}
test(); // Ausgabe: Zehn Mal die Zahl 10

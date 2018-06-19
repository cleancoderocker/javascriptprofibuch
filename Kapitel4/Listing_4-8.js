function test() {
  const result = [];
  for (let i = 1; i < 11; i++) {
    let number = i;
    result[i] = function() {
      return number;
    };
  }
  result.forEach(function(numberFunction) {
    console.log(numberFunction());
  });
}
test(); // Ausgabe nacheinander die Zahlen 1 bis 10

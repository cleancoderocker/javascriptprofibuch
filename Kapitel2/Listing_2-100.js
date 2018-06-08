function calculate() {
  console.log('calculate()');
  return 'Ergebnis';
}
function getResult() {
  const result = calculate(); // Hier die einmalige Berechnung
  getResult = function() {
    return result; // ab zweitem Aufruf
  };
  return result; // erster Aufruf
}
console.log(getResult()); // Ausgabe: "calculate()", dann "Ergebnis"
console.log(getResult()); // Ausgabe: "Ergebnis"
console.log(getResult()); // Ausgabe: "Ergebnis"
console.log(getResult()); // Ausgabe: "Ergebnis"

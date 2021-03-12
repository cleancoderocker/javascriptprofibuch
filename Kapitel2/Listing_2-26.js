function add(x, y) {
  const result = x + y;
  if (arguments[2]) {
    // Zugriff auf den optionalen Parameter
    console.log(result);
  }
  return result;
}
add(2, 2); // Aufruf ohne Logging
add(2, 2, true); // Aufruf mit Logging

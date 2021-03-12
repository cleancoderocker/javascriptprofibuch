function add(number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    throw new TypeError('Parameter müssen Zahlen sein.');
  }
  return number1 + number2;
}

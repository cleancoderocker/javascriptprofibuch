function asyncFunction() {
  let x;
  setTimeout(() => {
    throw new Error('Testfehler');
    x = 4711;
  }, Math.random() * 2000);
  return x;
}
try {
  const result = asyncFunction();
} catch (error) {
  console.error('Fehler: ' + error); // Das wird nicht aufgerufen
}

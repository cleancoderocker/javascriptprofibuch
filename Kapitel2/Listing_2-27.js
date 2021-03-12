function add(x, y, config) {
  const result = x + y;
  if (config && config.log) {
    console.log(result);
  }
  return result;
}
add(2, 2); // Aufruf ohne Logging
add(2, 2, { log: true }); // Aufruf mit Logging

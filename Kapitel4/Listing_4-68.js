function* counter() {
  let counter = 0;
  while (true) {
    counter++;
    const reset = yield counter;
    if (reset === true) {
      counter = 0;
    }
  }
}

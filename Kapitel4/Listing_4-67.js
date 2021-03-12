function* counter() {
  let counter = 0;
  while (true) {
    counter++;
    yield counter;
  }
}

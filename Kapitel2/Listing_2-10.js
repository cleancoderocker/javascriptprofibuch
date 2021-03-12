function operationFactory(name) {
  switch (name) {
    case 'add':
      return (x, y) => x + y;
    case 'subtract':
      return (x, y) => x - y;
    case 'multiply':
      return (x, y) => x * y;
    case 'divide':
      return (x, y) => x / y;
    default:
      return () => NaN;
  }
}

const factorial = x => {
  let result = 1;
  for (let i = x; i > 0; i--) {
    result *= i;
  }
  return result;
};

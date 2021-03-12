const array = ['1', 'Max', '2', '3', '4', '5', 'IoT', '6', '7', '8', '9'];
const result = array
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .reduce((x, y) => x + y);
console.log(result);

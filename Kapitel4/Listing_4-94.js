const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]
const firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber); // 2

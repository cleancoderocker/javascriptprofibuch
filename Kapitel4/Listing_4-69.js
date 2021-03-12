const counterInstance = counter();
console.log(counterInstance.next()); // {done: false, value: 1}
console.log(counterInstance.next()); // {done: false, value: 2}
console.log(counterInstance.next()); // {done: false, value: 3}
console.log(counterInstance.next()); // {done: false, value: 4}
console.log(counterInstance.next(true)); // {done: false, value: 1}

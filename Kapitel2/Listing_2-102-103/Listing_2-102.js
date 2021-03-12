const Rx = require('rxjs');
const array = ['1', 'Max', '2', '3', '4', '5', 'IoT', '6', '7', '8', '9'];
const stream = Rx.Observable.from(array);
stream
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .reduce((x, y) => x + y)
  .subscribe(
    x => console.log(x),
    error => console.error(error),
    () => console.log('Fertig')
  );

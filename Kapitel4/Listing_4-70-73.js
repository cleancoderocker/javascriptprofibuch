function asyncFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = 4711; // hier normalerweise asynchrone Berechnung
      if (result < 4000) {
        reject('Ergebnis kleiner als 4000');
      } else {
        resolve(result);
      }
    }, Math.random() * 2000);
  });
  return promise;
}

asyncFunction().then(
  result => {
    console.log(result);
  },
  error => {
    console.error(error);
  }
);

asyncFunction()
  .then(result => result * 2)
  .then(result => {
    console.log(result);
  });

asyncFunction()
  .then(result => result * 2)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

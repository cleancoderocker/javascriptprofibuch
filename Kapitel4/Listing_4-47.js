/* Funktioniert nur in ES6 */
let array = ['Kyuss', 'Blues for the Red Sun', 'Sky Valley'];
let [interpret, ...alben] = array;
console.log(alben); // Blues for the Red Sun, Sky Valley
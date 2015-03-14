/* Funktioniert nur in ES6 */
var generator = erstEinsDannZwei();
for(let {value} in generator) {
    if(value) {
        console.log(value);
    } else {
        break;
    }
}
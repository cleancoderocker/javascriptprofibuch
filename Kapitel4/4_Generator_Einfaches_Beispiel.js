function* erstEinsDannZwei() {
    yield 1;
    yield 2;
}
var generator = erstEinsDannZwei();
var ergebnis = generator.next();
console.log(ergebnis); // {done: false, value: 1}
ergebnis = generator.next();
console.log(ergebnis); // {done: false, value: 2}
ergebnis = generator.next();
console.log(ergebnis); // {done: true, value: undefined}

generator = erstEinsDannZwei();
for(let {value} in generator) {
    if(value) {
        console.log(value);
    }
}
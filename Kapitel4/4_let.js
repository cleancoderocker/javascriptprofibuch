function test() {  var ergebnis = [];  for(var i=1; i<11; i++) {    let zahl = i;    ergebnis[i] = function() {        return zahl;    };  }  ergebnis.forEach(function(zahlFunktion) {    console.log(zahlFunktion());  });}test();


function test(x) {
  // console.log(y); // ReferenceError: y is not defined  if(x) {
    console.log(y); // undefined    let y = 4711;
    console.log(y); // 4711  }
  // console.log(y); // ReferenceError: y is not defined}test(2);


function test(x) {
  console.log(y); // undefined  if(x) {    var y = 4711;  }
  console.log(y); // 4711}test(2);

function test(x) {  var y;
  console.log(y); // undefined  if(x) {    y = 4711;  }
  console.log(y); // 4711}test(2);

function test(x) {   var y = 4711;
  console.log(y); // 4711  if(x) {    var y = 2345;
    console.log(y); // 2345  }   console.log(y); // 2345}test(2);function test(x) {   console.log(y); // ReferenceError: y is not defined  if(x) {    let y = 4711;  }   console.log(y); // ReferenceError: y is not defined}test(2);
function test(x) {
// console.log(y); // ReferenceError: y is not defined
    if(x) {
        let y = 4711;
    }
// console.log(y); // ReferenceError: y is not defined
}
test(2);
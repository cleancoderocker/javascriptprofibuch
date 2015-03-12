function test(x) {
    var y;
    console.log(y); // undefined
    if(x) {
        y = 4711;
    }
    console.log(y); // 4711
}
test(2);
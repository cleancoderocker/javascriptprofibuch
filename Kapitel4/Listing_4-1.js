function test(x) {
    console.log(y); // undefined
    if(x) {
        var y = 4711;
    }
    console.log(y); // 4711
}
test(2);
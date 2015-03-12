function test(x) {
    var y = 4711;
    console.log(y); // 4711
    if(x) {
        var y = 2345;
        console.log(y); // 2345
    }
    console.log(y); // 2345
}
test(2);
function eineFunktion(callback) {
// hier weiterer Code
    callback();
// hier weiterer Code
}
function nochEineFunktion() {
    console.log("nochEineFunktion")
}
eineFunktion(nochEineFunktion);
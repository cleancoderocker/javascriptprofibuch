/* Funktioniert nur in ES6 */
var fakultaet = x => {
    let ergebnis = 1;
    for(let i=x; i>0; i--) {
        ergebnis *= i;
    }
    return ergebnis;
}
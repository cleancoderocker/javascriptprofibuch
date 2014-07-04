/**
 * Created by philipackermann on 09.06.14.
 */
function addition(x, y, malZwei) {
    var ergebnis = 0;
    if(x >= 0 && y >= 0) {
        ergebnis = x + y;
    } else {
        throw new Error("Parameter müssen größer oder gleich null sein.")
    }
    if(malZwei) {
        ergebnis *= 2;
    }
    return ergebnis;
}
module.exports = addition;
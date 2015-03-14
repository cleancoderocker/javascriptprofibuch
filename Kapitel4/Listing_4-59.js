/* Funktioniert nur in ES6 */
let interpreten = ['Kyuss', 'QOTSA', 'Ben Harper', 'Monster Magnet'];
let interpretenWrapper = {}
interpretenWrapper.interpreten = interpreten;
interpretenWrapper[Symbol.iterator] = function() {
    var interpreten = this.interpreten;
    var zaehler = this.interpreten.length-1;
// Rückgabe des Iterator-Objekts
    return {
        next: function(){
            if (zaehler < 0) {
                return {
                    done: true
                };
            } else {
                return {
                    value: interpreten[zaehler--],
                    done: false
                };
            }
        }
    }
};
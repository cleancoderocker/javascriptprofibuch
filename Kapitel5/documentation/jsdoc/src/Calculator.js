/**
 * Ein kleiner Taschenrechner
 *
 * @class Calculator
 * @constructor
 */
function Calculator() {
    /**
     * Diese Methode addiert zwei Zahlen.
     *
     * @method add
     * @param {Number} x Zahl 1
     * @param {Number} y Zahl 2
     * @return {Number} Liefert das Ergebnis der Addition von x und y.
     */
    this.add = function(x,y) {
        return x + y;
    }
}

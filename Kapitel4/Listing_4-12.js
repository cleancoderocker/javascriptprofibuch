var konstantenModul = (function () {
    var konstanten = {};
    return {
        definiere: function (name, wert) {
            if (this.istDefiniert(name)) {
                return false;
            }
            konstanten[name] = wert;
            return true;
        },
        istDefiniert: function (name) {
            return Object.prototype.hasOwnProperty.call(konstanten, name);
        },
        get: function (name) {
            if (this.istDefiniert(name)) {
                return konstanten[name];
            }
            return null;
        }
    };
}());
console.log(konstantenModul.istDefiniert('MAXIMUM')); // false
konstantenModul.definiere('MAXIMUM', 200000);
console.log(konstantenModul.get('MAXIMUM')); // 200000
console.log(konstantenModul.istDefiniert('MAXIMUM')); // true
konstantenModul.definiere('MAXIMUM', 700000); // ohne Wirkung
console.log(konstantenModul.get('MAXIMUM')); // 200000
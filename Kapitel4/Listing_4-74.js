/* Funktioniert nur in ES6 */
let personValidator = {
    set: function(objekt, eigenschaft, wert) {
        if (eigenschaft === 'alter') {
            if (!Number.isInteger(eigenschaft)) {
                throw new TypeError('Das Alter muss eine Zahl sein.');
            }
        }
        objekt[eigenschaft] = wert;
    }
};
let person = Proxy({}, personValidator);
person.alter = 100;
console.log(person.alter); // 100
person.alter = 'Mitte 20'; // TypeError: Das Alter muss eine Zahl sein.
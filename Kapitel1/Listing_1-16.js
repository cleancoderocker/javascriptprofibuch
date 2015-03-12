function addition(zahl1, zahl2) {
    if((typeof zahl1 !== "number") || (typeof zahl2 !== "number")) {
        throw new TypeError("Parameter müssen Zahlen sein.");
    }
    return zahl1 + zahl2;
};
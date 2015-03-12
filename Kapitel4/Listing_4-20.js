var Person = {
    set name(wert) {
        console.log("Neuer Name: " + wert);
        this.internerName = wert;
    },
    get name() {
        console.log("Name: " + this.internerName);
        return this.internerName;
    },
    set nachname(wert) {
        console.log("Neuer Nachname: " + wert);
        this.internerNachname = wert;
    },
    get nachname() {
        console.log("Nachname: " + this.internerNachname);
        return this.internerNachname;
    }
}
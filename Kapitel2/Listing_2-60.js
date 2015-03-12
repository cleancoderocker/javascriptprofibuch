function zaehler(name) {
    var i=0;
    return function() {
        i++;
        console.log(name + ': ' + i);
    }
}
var zaehler1 = zaehler('Zähler 1');
zaehler1(); // Zähler 1: 1
zaehler1(); // Zähler 1: 2
var zaehler2 = zaehler('Zähler 2');
zaehler2(); // Zähler 2: 1
zaehler2(); // Zähler 2: 2
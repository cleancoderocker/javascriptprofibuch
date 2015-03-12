function gibVier() {
    return 4;
}
function gibAuchVier() {
    return 4;
}
var s = 4;
switch(s) {
    case gibVier(): console.log("gibVier"); break;
    case gibAuchVier(): console.log("gibAuchVier"); break;
    default: console.log("nichts");
}
// Ausgabe des Programms: gibVier
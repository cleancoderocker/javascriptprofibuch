// Schritt 1
function Tier(name) {
    this.name = name;
};
// Schritt 2
Tier.prototype.fressen = function() {
    console.log('fressen');
}
// Schritt 3
function Hund(name, hunderasse) {
    Tier.call(this, name);
    this.hunderasse = hunderasse;
};
// Schritt 4
Hund.prototype = new Tier();
// Schritt 5
Hund.prototype.constructor = Hund;
// Schritt 6
Hund.prototype.bellen = function() {
    console.log(this.name + ': Wau');
}
var bello = new Hund('Bello', 'Malteser');
var struppi = new Hund('Struppi', 'Havaneser');
struppi.bellen = function() {
    Hund.prototype.bellen.call(this);
    Hund.prototype.bellen.call(this);
}
bello.bellen(); // Bello: Wau
struppi.bellen(); // 2 x Struppi: Wau
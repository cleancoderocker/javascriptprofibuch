var Tier = {
    fressen: function() {
        console.log('fressen');
    }
}
var Hund = Object.create(Tier);
Hund.bellen = function() {
    console.log(this.name + ': Wau');
}
var bello = Object.create(Hund);
bello.constructor('Bello');
var struppi = Object.create(Hund);
struppi.constructor('Struppi');
struppi.bellen = function() {
    Hund.bellen.call(this);
    Hund.bellen.call(this);
}
struppi.bellen(); // 2 x 'Struppi: Wau'
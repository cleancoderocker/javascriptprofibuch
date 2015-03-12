var tier = {
    fressen: function() {
        console.log('fressen');
    }
}
var hund = Object.create(tier);
hund.bellen = function() {
    console.log(this.name + ': Wau');
}
var bello = Object.create(hund);
bello.name = 'Bello';
var struppi = Object.create(hund);
struppi.name = 'Struppi';
struppi.bellen = function() {
    hund.bellen.call(this);
    hund.bellen.call(this);
}
struppi.bellen(); // 2 x Struppi: Wau
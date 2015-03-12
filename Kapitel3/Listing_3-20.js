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
    console.log('Wau Wau');
}
bello.bellen(); // Bello: Wau
struppi.bellen(); // Wau Wau
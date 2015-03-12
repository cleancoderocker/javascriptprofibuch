var tier = {
    name: undefined,
    fressen: function() {
        console.log('fressen');
    }
}
var hund = Object.create(tier);
hund.bellen = function() {
    console.log('Wau');
}
var bello = Object.create(hund);
bello.name = 'Bello';
var struppi = Object.create(hund);
struppi.name = 'Struppi';
bello.fressen(); // fressen
bello.bellen(); // Wau
var hund = {
    name: undefined,
    bellen: function() {
        console.log('Wau');
    }
}
var bello = Object.create(hund);
bello.name = 'Bello';
var struppi = Object.create(hund);
struppi.name = 'Struppi';
hund.bellen() // Wau
bello.bellen(); // Wau
struppi.bellen(); // Wau
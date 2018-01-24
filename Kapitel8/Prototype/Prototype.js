(function() {
    var wuerfel = {
        breite : 20,
        tiefe : 20,
        hoehe : 20,
        farbe : 'weiß',
        setBreite : function(breite) {
            this.breite = breite; },
        getBreite : function() { return this.breite;
        },
        setTiefe : function(tiefe) {
            this.tiefe = tiefe;
        },
        getTiefe : function() {
            return this.tiefe;
        },
        setHoehe : function(hoehe) {
            this.hoehe = hoehe; },
        getHoehe : function() {
            return this.hoehe;
        },
        setFarbe : function(farbe) {
            this.farbe = farbe;
        },
        getFarbe : function() {
            return this.farbe;
        }
    }
    var gelberWuerfel = Object.create(wuerfel);
    gelberWuerfel.setFarbe('gelb');
    var blauerWuerfel = Object.create(wuerfel);
    blauerWuerfel.setFarbe('blau');
    console.log(wuerfel.getFarbe()); // weiß
    console.log(gelberWuerfel.getFarbe()); // gelb
    console.log(blauerWuerfel.getFarbe()); // blau
    console.log(gelberWuerfel.getBreite()); // 20
    console.log(blauerWuerfel.getBreite()); // 20
    wuerfel.setBreite(40);
    console.log(gelberWuerfel.getBreite()); // 40
    console.log(blauerWuerfel.getBreite()); // 40
    gelberWuerfel.setBreite(60);
    console.log(gelberWuerfel.getBreite()); // 60
    console.log(blauerWuerfel.getBreite()); // 40
})();
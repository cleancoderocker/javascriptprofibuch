var Karton = function(breite, tiefe, hoehe) {
    this.breite = breite;
    this.tiefe = tiefe;
    this.hoehe = hoehe;
    this.implementsInterfaces = ['Box'];
    this.getBreite = function() {
        return breite;
    }
    this.getTiefe = function() {
        return tiefe;
    }
    this.getHoehe = function() {
        return hoehe;
    }
    return {
        implementsInterfaces : this.implementsInterfaces,
        getBreite : this.getBreite,
        getTiefe : this.getTiefe,
        getHoehe : this.getHoehe,
    }
}
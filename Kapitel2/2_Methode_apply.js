(function() {

    var rechner = {
        faktor : 2,
        multipliziere : function(x, y, z) {
            return this.faktor * (x + y + z);
        }
    }

    console.log(rechner.multipliziere.apply(rechner, [2,4,6]));

})();

(function() {

    function addiere(x, y, z) {
        return x + y + z;
    }

    console.log(addiere.apply(null, [2,4,6]));

})();
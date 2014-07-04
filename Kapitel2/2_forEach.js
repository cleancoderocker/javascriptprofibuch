(function() {

    var interpreten = ['Kyuss', 'Dozer', 'Spiritual Beggars', 'Monster Magnet']
    for(var i= 0, l=interpreten.length; i<l; i++) {
        console.log(interpreten[i]);
    }

})();

(function() {

    var interpreten = ['Kyuss', 'Dozer', 'Spiritual Beggars', 'Monster Magnet']
    interpreten.forEach(function(interpret, index, interpreten) {
        console.log(interpret);
    });

})();
console.log('%s: %d', 'Ergebnis', 2.4);

(function() {
    function beispiel() {
        console.trace();
    }

    function beispiel2() {
        beispiel();
    }

    beispiel2();
})();


(function() {
    var person = {
        name : 'Max',
        nachname : 'Mustermann'
    }
    console.log('%j', person);
    console.dir(person);
})();

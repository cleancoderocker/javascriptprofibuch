(function() {
    function beispiel() {
        var y = 4711;
        console.log(y);
    }
    beispiel();
})();

(function() {
    function beispiel(x) {
        if(x) {
            var y = 4711;
        }
        for(var i=0; i<4711; i++) {}
        console.log(y);
        console.log(i);
    }
    beispiel(true);
})();

(function() {
    function beispiel(x) {
        console.log(y);
        console.log(i);
        if(x) {
            var y = 4711;
        }
        for(var i=0; i<4711; i++) {}
    }
    beispiel(true);
})();

(function() {
    function beispiel(x) {
        var y;
        var i;
        console.log(y);
        console.log(i);
        if(x) {
            y = 4711;
        }
        for(i=0; i<4711; i++) {}
    }
    beispiel(true);
})();
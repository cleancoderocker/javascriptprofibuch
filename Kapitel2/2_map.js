(function() {
    var interpreten = [
        {
            name: "Nick Cave"
        },
        {
            name: "Ben Harper"
        }
    ];
    var namen = [];
    for(var i=0, l=interpreten.length; i<l; i++) {
        namen.push(interpreten[i].name);
    }
    console.log(namen);
})();

(function() {
    var interpreten = [
        {
            name: "Nick Cave"
        },
        {
            name: "Ben Harper"
        }
    ];
    var namen = interpreten.map(function(interpret) {
       return interpret.name;
    });
    console.log(namen);
})();

(function() {
    var interpreten = [
        {
            name: "Nick Cave"
        },
        {
            name: "Ben Harper"
        }
    ];

    function eigenschaft(name) {
        return function(objekt) {
            return objekt[name];
        }
    }

    var namen = interpreten.map(eigenschaft("name"));
    console.log(namen);
})();
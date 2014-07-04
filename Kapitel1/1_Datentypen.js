(function() {
    var interpret = 'DJ Shadow';
    var titel = "Entroducing";
})();

(function() {
    console.log("*****");
    console.log(false == 0); // true
    console.log(false == ""); // true
    console.log(0 == ""); // true

    console.log("*****");
    console.log(null == false); // false
    console.log(null == true); // false
    console.log(null == null); // true
    console.log(undefined == undefined); // true
    console.log(undefined == null); // true

    console.log("*****");
    console.log(NaN == false); // false
    console.log(NaN == null); // false
    console.log(NaN == NaN); // false

    console.log("*****");
    console.log(false == null); // false
    if(null) {
        console.log("null");
    } else if(!null) {
        console.log("!null"); // Ausgabe
    }

    console.log("*****");
    console.log(true == {}); // false
    if({}) {
        console.log("{}"); // Ausgabe
    } else if(!{}) {
        console.log("!{}");
    }
})();

(function() {
    function beispiel(parameter) {
        if(parameter !== undefined && parameter !== null) {
            console.log("Definiert und nicht null");
        }
        if(parameter) {
            console.log("Definiert und nicht null");
        }
    }
    beispiel(null);
    beispiel(undefined);
    beispiel("Hallo");
})();
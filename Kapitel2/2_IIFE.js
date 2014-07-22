(function() {
    console.log("Diese Funktion wird deklariert und sofort aufgerufen.")
}());

(function() {
    console.log("Diese Funktion wird deklariert und sofort aufgerufen.")
})();

!function() {
    console.log("Diese Funktion wird deklariert und sofort aufgerufen.")
}();

var funktionMitName = (function() {
    console.log("Diese Funktion wird deklariert und sofort aufgerufen.")
});
funktionMitName();
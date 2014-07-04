(function() {
    function nichtImStriktenModus() {
        variable3 = 4711;
    }
    function imStriktenModus() {
        "use strict"
        variable3 = 4711;
    }
    nichtImStriktenModus();
    imStriktenModus();
})();


function s(callback) {
    callback && callback();
}

s();
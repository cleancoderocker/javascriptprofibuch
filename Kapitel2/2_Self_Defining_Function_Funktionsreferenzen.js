(function() {
    function erstEinsDannZwei() {
        console.log(1);
        erstEinsDannZwei = function() {
            console.log(2);
        }
    }
    var funktionsReferenz = erstEinsDannZwei;
    erstEinsDannZwei();
    erstEinsDannZwei();
    funktionsReferenz();
    funktionsReferenz();
})();
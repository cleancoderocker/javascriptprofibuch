function erstEinsDannZwei() {
    console.log(1);
    erstEinsDannZwei = function() {
        console.log(2);
    }
}
var funktionsReferenz = erstEinsDannZwei;
erstEinsDannZwei(); // 1
erstEinsDannZwei(); // 2
funktionsReferenz(); // 1
funktionsReferenz(); // 1
function erstEinsDannZwei() {
    console.log(1);
    erstEinsDannZwei = function() {
        console.log(2);
    }
}
erstEinsDannZwei(); // Ausgabe: 1
erstEinsDannZwei(); // Ausgabe: 2
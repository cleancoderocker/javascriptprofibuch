(function() {
    var singleton = {};
})();

(function() {
    var Singleton = ( function () {
        var instance;
        function init() {
            var randomNumber = Math.random();
            return {
                getRandomNumber: function() {
                    return randomNumber;
                }
            };
        };
        return {
            getInstance: function () {
                if(!instance) {
                    instance = init();
                }
                return instance;
            }
        };
    })();
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    console.log(s1.getRandomNumber() === s2.getRandomNumber());
})();

(function() {
    var Singleton = (
        function () {
            return {
                getInstance: function () {
                    // Die Instanz wird nur einmal initialisiert
                    var instance = function(){
                        var randomNumber = Math.random();
                        return {
                            getRandomNumber : function() {
                                return randomNumber;
                            }
                        }
                    }();
                    // Neudefinition der Funktion
                    this.getInstance = function() {
                        return instance;
                    }
                    return this.getInstance();
                }
            };
        })();
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    console.log(s1.getRandomNumber() === s2.getRandomNumber());
})();
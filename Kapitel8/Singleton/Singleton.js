(function() {
    /* Listing 7.3 */
    var singleton = {};
})();

(function() {
    /* Listing 7.4 */
    var Singleton = ( function () {
        var instance;
        function init() {
            var zufallsZahl = Math.random();
            return {
                getZufallsZahl: function() {
                    return zufallsZahl;
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
    console.log(s1.getZufallsZahl() === s2.getZufallsZahl());
})();

(function() {
    /* Listing 7.5 */
    var Singleton = (
        function () {
            return {
                getInstance: function () {
                    // Die Instanz wird nur einmal initialisiert
                    var instance = function(){
                        var zufallsZahl = Math.random();
                        return {
                            getZufallsZahl : function() {
                                return zufallsZahl;
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
    console.log(s1.getZufallsZahl() === s2.getZufallsZahl());
})();
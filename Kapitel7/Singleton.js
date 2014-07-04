/**
 * Created by philipackermann on 15.05.14.
 */
// Singleton Variante 1
(function() {
    var singleton = {};
})();

// Singleton Variante 2
(function() {
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

// Singleton Variante 3
(function() {
    var Singleton = (
        function () {
            return {
                getInstance: function () {
                    // Die Instanz wird nur einmal initialisiert
                    var instance = new function(){
                        var zufallsZahl = Math.random();
                        return {
                            getZufallsZahl : function() {
                                return zufallsZahl;
                            }
                        }
                    }
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
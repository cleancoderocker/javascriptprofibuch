(function() {
    const singleton = {};
})();

(function() {
    const Singleton = ( function () {
        let instance;
        function init() {
            const randomNumber = Math.random();
            return {
                getRandomNumber() {
                    return randomNumber;
                }
            };
        };
        return {
            getInstance() {
                if(!instance) {
                    instance = init();
                }
                return instance;
            }
        };
    })();
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    console.log(s1.getRandomNumber() === s2.getRandomNumber());
})();

(function() {
    const Singleton = (
        function () {
            return {
                getInstance() {
                    // Die Instanz wird nur einmal initialisiert
                    const instance = function(){
                        const randomNumber = Math.random();
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
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    console.log(s1.getRandomNumber() === s2.getRandomNumber());
})();
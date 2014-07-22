(function() {

    var button = {
        handler : null,
        onClick : function(handler) {
            this.handler = handler;
        },
        click : function() {
            this.handler();
        }
    };

    var handler = {
        log : function() {
            console.log("Button geklickt.");
        },
        handle: function() {
            this.log();
        }
    }

    button.onClick(handler.handle.bind(handler));
    button.click();
})();


(function() {

    var button = {
        handler : null,
        onClick : function(handler) {
            this.handler = handler;
        },
        click : function() {
            this.handler();
        }
    };

    var handler = {
        log : function() {
            console.log("Button geklickt.");
        },
        handle: function() {
            this.log();
        }
    }

    button.onClick(function() {
        handler.handle();
    });
    button.click();
})();

(function() {

    var button = {
        handler : null,
        onClick : function(handler) {
            this.handler = handler;
        },
        click : function() {
            this.handler();
        }
    };

    var handler = {
        log : function() {
            console.log("Button geklickt.");
        },
        handle: function() {
            this.log();
        }
    }

    button.onClick(handler.handle.bind(handler));
    button.click();
})();
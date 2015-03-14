(function () {
    /* Listing 7.27 */
    // Aufrufer
    function Schaltflaeche(command) {
        this.command = command;
        this.click = function () {
            command.ausfuehren();
        }
    }

// Empfänger
    function VideoPlayer() {
        this.einschalten = function () {
            console.log("einschalten");
        }
        this.ausschalten = function () {
            console.log("ausschalten");
        }
    }

// Commands
    var Command = function (empfaenger) {
        this.empfaenger = empfaenger;
    };
    Command.prototype.ausfuehren = function () {
    };
    var EinschaltenCommand = function (empfaenger) {
        Command.call(this, empfaenger);
    };
    EinschaltenCommand.prototype = Object.create(Command.prototype);
    EinschaltenCommand.prototype.ausfuehren = function () {
        this.empfaenger.einschalten();
    }
    var AusschaltenCommand = function (empfaenger) {
        Command.call(this, empfaenger);
    };
    AusschaltenCommand.prototype = Object.create(Command.prototype);
    AusschaltenCommand.prototype.ausfuehren = function () {
        this.empfaenger.ausschalten();
    }
// Client
    var videoPlayer = new VideoPlayer();
// Instanzen der Commands
    var einschaltenCommand = new EinschaltenCommand(videoPlayer);
    var ausschaltenCommand = new AusschaltenCommand(videoPlayer);
    var schaltflaecheEin = new Schaltflaeche(einschaltenCommand);
    var schaltflaecheAus = new Schaltflaeche(ausschaltenCommand);
    schaltflaecheEin.click();
    schaltflaecheAus.click();
})
();

(function () {
    /* Listing 7.28 */
    // Aufrufer
    function Schaltflaeche(command) {
        this.click = command;
    }

// Empfänger
    function VideoPlayer() {
        this.einschalten = function () {
            console.log("einschalten");
        }
        this.ausschalten = function () {
            console.log("ausschalten");
        }
    }

// Client
    var videoPlayer = new VideoPlayer();
// Die Commands sind Funktionen
    var einschaltenCommand = function (empfaenger) {
        return function () {
            empfaenger.einschalten();
        }
    }
    var ausschaltenCommand = function (empfaenger) {
        return function () {
            empfaenger.ausschalten();
        }
    }
    var schaltflaecheEin = new Schaltflaeche(einschaltenCommand(videoPlayer));
    var schaltflaecheAus = new Schaltflaeche(ausschaltenCommand(videoPlayer));
    schaltflaecheEin.click();
    schaltflaecheAus.click();
})();

(function () {
    /* Listing 7.29 */
    // Aufrufer
    function Schaltflaeche(command) {
        this.click = command;
    }

// Empfänger
    function VideoPlayer() {
        this.einschalten = function () {
            console.log("einschalten");
        }
        this.ausschalten = function () {
            console.log("ausschalten");
        }
    }

// Client
    var videoPlayer = new VideoPlayer();
    var schaltflaecheEin = new Schaltflaeche(videoPlayer.einschalten.bind(videoPlayer));
    var schaltflaecheAus = new Schaltflaeche(videoPlayer.ausschalten.bind(videoPlayer));
    schaltflaecheEin.click();
    schaltflaecheAus.click();
})();

(function () {
    /* Listing 7.30 */
    var einschaltenAusschaltenCommand = function (empfaenger) {
        return function () {
            empfaenger.einschalten();
            empfaenger.ausschalten();
        }
    }
})();
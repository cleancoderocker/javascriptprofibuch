(function () {
    // Aufrufer
    function Button(command) {
        this.command = command;
        this.click = function () {
            command.execute();
        }
    }

	// Empfänger
    function VideoPlayer() {
        this.switchOn = function () {
            console.log("einschalten");
        }
        this.switchOff = function () {
            console.log("ausschalten");
        }
    }

	// Commands
    var Command = function (receiver) {
        this.receiver = receiver;
    };
    Command.prototype.execute = function () {
    };
    var SwitchOnCommand = function (receiver) {
        Command.call(this, receiver);
    };
    SwitchOnCommand.prototype = Object.create(Command.prototype);
    SwitchOnCommand.prototype.execute = function () {
        this.receiver.switchOn();
    }
    var SwitchOffCommand = function (receiver) {
        Command.call(this, receiver);
    };
    SwitchOffCommand.prototype = Object.create(Command.prototype);
    SwitchOffCommand.prototype.execute = function () {
        this.receiver.switchOff();
    }

	// Client
    var videoPlayer = new VideoPlayer();
	// Instanzen der Commands
    var switchOnCommand = new SwitchOnCommand(videoPlayer);
    var switchOffCommand = new SwitchOffCommand(videoPlayer);
    var buttonOn = new Button(switchOnCommand);
    var buttonOff = new Button(switchOffCommand);
    buttonOn.click();
    buttonOff.click();
})
();

(function () {
    // Aufrufer
    function Button(command) {
        this.click = command;
    }

	// Empfänger
    function VideoPlayer() {
        this.switchOn = function () {
            console.log("einschalten");
        }
        this.switchOff = function () {
            console.log("ausschalten");
        }
    }

	// Client
    var videoPlayer = new VideoPlayer();
	// Die Commands sind Funktionen
    var switchOnCommand = function (receiver) {
        return function () {
            receiver.switchOn();
        }
    }
    var switchOffCommand = function (receiver) {
        return function () {
            receiver.switchOff();
        }
    }
    var buttonOn = new Button(switchOnCommand(videoPlayer));
    var buttonOff = new Button(switchOffCommand(videoPlayer));
    buttonOn.click();
    buttonOff.click();
})();

(function () {
    // Aufrufer
    function Button(command) {
        this.click = command;
    }

	// Empfänger
    function VideoPlayer() {
        this.switchOn = function () {
            console.log("einschalten");
        }
        this.switchOff = function () {
            console.log("ausschalten");
        }
    }

	// Client
    var videoPlayer = new VideoPlayer();
    var buttonOn = new Button(videoPlayer.switchOn.bind(videoPlayer));
    var buttonOf = new Button(videoPlayer.switchOff.bind(videoPlayer));
    buttonOn.click();
    buttonOf.click();
})();

(function () {
    var switchOnOffCommand = function (receiver) {
        return function () {
            receiver.switchOn();
            receiver.switchOff();
        }
    }
})();
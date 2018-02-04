(function () {
	// Aufrufer
	class Button {

		constructor(command) {
			this.command = command;
			this.click = function () {
				command.execute();
			}
		}

	}

	// Empfänger
	class VideoPlayer {

		switchOn() {
            console.log("einschalten");
		}
		
        switchOff() {
            console.log("ausschalten");
		}
		
	}

	// Commands
	class Command {

		constructor(receiver) {
			this.receiver = receiver;
		}

		execute() {

		}
	}

	class SwitchOnCommand extends Command {

		execute() {
			this.receiver.switchOn();
		}

	}

	class SwitchOffCommand extends Command {

		execute() {
			this.receiver.switchOff();
		}

	}
	
	// Client
    const videoPlayer = new VideoPlayer();
	// Instanzen der Commands
    const switchOnCommand = new SwitchOnCommand(videoPlayer);
    const switchOffCommand = new SwitchOffCommand(videoPlayer);
    const buttonOn = new Button(switchOnCommand);
    const buttonOff = new Button(switchOffCommand);
    buttonOn.click();
    buttonOff.click();
})
();

(function () {
    // Aufrufer
    class Button {

		constructor(command) {
			this.click = command;
		}

	}

	// Empfänger
	class VideoPlayer {

		switchOn() {
            console.log("einschalten");
		}
		
        switchOff() {
            console.log("ausschalten");
		}
		
	}

	// Client
    const videoPlayer = new VideoPlayer();
	// Die Commands sind Funktionen
	const switchOnCommand = (receiver) => () => receiver.switchOn();
    const switchOffCommand = (receiver) => () => receiver.switchOff();
    const buttonOn = new Button(switchOnCommand(videoPlayer));
    const buttonOff = new Button(switchOffCommand(videoPlayer));
    buttonOn.click();
    buttonOff.click();
})();

(function () {
    // Aufrufer
    class Button {

		constructor(command) {
			this.click = command;
		}

	}

	// Empfänger
	class VideoPlayer {

		switchOn() {
            console.log("einschalten");
		}
		
        switchOff() {
            console.log("ausschalten");
		}
		
	}

	// Client
    const videoPlayer = new VideoPlayer();
    const buttonOn = new Button(videoPlayer.switchOn.bind(videoPlayer));
    const buttonOff = new Button(videoPlayer.switchOff.bind(videoPlayer));
    buttonOn.click();
    buttonOff.click();
})();

(function () {
    const switchOnOffCommand = (receiver) => () => {
		receiver.switchOn();
		receiver.switchOff();
	}
})();
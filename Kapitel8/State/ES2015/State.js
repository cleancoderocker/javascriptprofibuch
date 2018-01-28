(function() {

	class VideoPlayer {

		constructor() {
			this.status = 'stopped';
		}

		play() {
            if (this.status === 'playing') {
                console.log('Spielt schon');
                return;
            } else if (this.status === 'stopped') {
                console.log('Video abspielen');
                this.status = 'playing';
            }
		}
		
        stop() {
            if (this.status === 'playing') {
                console.log('Video stoppen');
                this.status = 'stopped';
            } else if (this.status === 'stopped') {
                console.log('Schon gestoppt');
                return;
            }
        }

	}

	const videoPlayer = new VideoPlayer();
    videoPlayer.play();
    videoPlayer.play(); // Spielt schon
    videoPlayer.stop();
    videoPlayer.stop(); // Schon gestoppt
    videoPlayer.play();
    videoPlayer.stop();
})();

(function() {

	class VideoPlayerState {

		constructor(videoPlayer) {
			this.videoPlayer = videoPlayer;
		}

	}

	class PlayingState extends VideoPlayerState {

		play() {
			console.log('Spielt schon');
		}

		stop() {
			console.log('Video stoppen');
			this.videoPlayer.changeState(this.videoPlayer.states.stopped);
		}

	}

	class StoppedState extends VideoPlayerState {

		play() {
			console.log('Video abspielen');
			this.videoPlayer.changeState(this.videoPlayer.states.playing);
		}

		stop() {
			console.log('Schon gestoppt');
		}

	}

	class VideoPlayer {

		constructor() {
			this.status = 'stopped';
			this.states = {
				playing: new PlayingState(this),
				stopped: new StoppedState(this)
			}
			this.initialize();
		}

        changeState(state) {
            if (this.state !== state) {
                this.state = state;
            }
		}
		
        play() {
            this.state.play();
		}
		
        stop() {
            this.state.stop();
		}
		
        initialize() {
            this.state = this.states.stopped;
        }
		
	}

	const videoPlayer = new VideoPlayer();
    videoPlayer.play();
    videoPlayer.play(); // Spielt schon
    videoPlayer.stop();
    videoPlayer.stop(); // Schon gestoppt
    videoPlayer.play();
    videoPlayer.stop();
})();
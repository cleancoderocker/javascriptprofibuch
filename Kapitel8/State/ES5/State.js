(function() {
    var videoPlayer = {
        status: 'stopped',
        play: function() {
            if (this.status === 'playing') {
                console.log('Spielt schon');
                return;
            } else if (this.status === 'stopped') {
                console.log('Video abspielen');
                this.status = 'playing';
            }
        },
        stop: function() {
            if (this.status === 'playing') {
                console.log('Video stoppen');
                this.status = 'stopped';
            } else if (this.status === 'stopped') {
                console.log('Schon gestoppt');
                return;
            }
        }
    }
    videoPlayer.play();
    videoPlayer.play(); // Spielt schon
    videoPlayer.stop();
    videoPlayer.stop(); // Schon gestoppt
    videoPlayer.play();
    videoPlayer.stop();
})();

(function() {
    var videoPlayer = {
        state: undefined,
        states: {
            playing: {
                play: function() {
                    console.log('Spielt schon');
                },
                stop: function() {
                    console.log('Video stoppen');
                    videoPlayer.changeState(videoPlayer.states.stopped);
                }
            },
            stopped: {
                play: function() {
                    console.log('Video abspielen');
                    videoPlayer.changeState(videoPlayer.states.playing);
                },
                stop: function() {
                    console.log('Schon gestoppt');
                }
            }
        },
        changeState: function(state) {
            if (this.state !== state) {
                this.state = state;
            }
        },
        play: function() {
            this.state.play();
        },
        stop: function() {
            this.state.stop();
        },
        initialize: function() {
            this.state = this.states.stopped;
        }
    }
    videoPlayer.initialize();
    videoPlayer.play();
    videoPlayer.play(); // Spielt schon
    videoPlayer.stop();
    videoPlayer.stop(); // Schon gestoppt
    videoPlayer.play();
    videoPlayer.stop();
})();
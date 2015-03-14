(function() {
    /* Listing 7.38 */
    var videoplayer = {
        status: 'stopped',
        play: function() {
            if (this.status == 'playing') {
                console.log('Spielt schon');
                return;
            } else if (this.status === 'stopped') {
                console.log('Video abspielen');
                this.status = 'playing';
            }
        },
        stop: function() {
            if (this.status == 'playing') {
                console.log('Video stoppen');
                this.status = 'stopped';
            } else if (this.status === 'stopped') {
                console.log('Schon gestoppt');
                return;
            }
        }
    }
    videoplayer.play();
    videoplayer.play(); // Spielt schon
    videoplayer.stop();
    videoplayer.stop(); // Schon gestoppt
    videoplayer.play();
    videoplayer.stop();
})();

(function() {
    /* Listing 7.39 */
    var videoplayer = {
        state: undefined,
        states: {
            playing: {
                play: function() {
                    console.log('Spielt schon');
                },
                stop: function() {
                    console.log('Video stoppen');
                    videoplayer.changeState(videoplayer.states.stopped);
                }
            },
            stopped: {
                play: function() {
                    console.log('Video abspielen');
                    videoplayer.changeState(videoplayer.states.playing);
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
    videoplayer.initialize();
    videoplayer.play();
    videoplayer.play(); // Spielt schon
    videoplayer.stop();
    videoplayer.stop(); // Schon gestoppt
    videoplayer.play();
    videoplayer.stop();
})();
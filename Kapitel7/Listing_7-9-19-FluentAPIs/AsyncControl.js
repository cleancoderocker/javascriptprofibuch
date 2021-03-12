module.exports = class AsyncControl {

  next(callback) {
    console.log('Next song');
	setTimeout(callback, 500);
  }

  pause(callback) {
    console.log('Pause');
	setTimeout(callback, 500);
  }

  play(callback) {
    console.log('Play');
	setTimeout(callback, 500);
  }

  previous(callback) {
    console.log('Previous song');
	setTimeout(callback, 500);
  }

  select(track, callback) {
    console.log(`Select track ${track}`);
	setTimeout(callback, 500);
  }

  stop(callback) {
    console.log('Stop');
	setTimeout(callback, 500);
  }
}

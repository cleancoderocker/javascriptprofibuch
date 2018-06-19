module.exports = class AsyncAsyncControl {

  async next(callback) {
    console.log('Next song');
	setTimeout(callback, 500);
  }

  async pause(callback) {
    console.log('Pause');
	setTimeout(callback, 500);
  }

  async play(callback) {
    console.log('Play');
	setTimeout(callback, 500);
  }

  async previous(callback) {
    console.log('Previous song');
	setTimeout(callback, 500);
  }

  async select(track, callback) {
    console.log(`Select track ${track}`);
	setTimeout(callback, 500);
  }

  async stop(callback) {
    console.log('Stop');
	setTimeout(callback, 500);
  }
}

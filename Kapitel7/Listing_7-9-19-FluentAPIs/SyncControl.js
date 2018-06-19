module.exports = class SyncControl {

  next() {
    console.log('Next song');
  }

  pause() {
    console.log('Pause');
  }

  play() {
    console.log('Play');
  }

  previous() {
    console.log('Previous song');
  }

  select(track) {
    console.log(`Select track ${track}`);
  }

  stop() {
    console.log('Stop');
  }
}

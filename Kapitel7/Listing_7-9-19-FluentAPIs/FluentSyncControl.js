module.exports = class FluentSyncControl {

  next() {
    console.log('Next song');
	return this;
  }

  pause() {
    console.log('Pause');
	return this;
  }

  play() {
    console.log('Play');
	return this;
  }

  previous() {
    console.log('Previous song');
	return this;
  }

  select(track) {
    console.log(`Select track ${track}`);
	return this;
  }

  stop() {
    console.log('Stop');
	return this;
  }
}

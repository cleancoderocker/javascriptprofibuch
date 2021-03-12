module.exports = class AsyncControlPromises {

  next() {
    console.log('Next song');
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  pause() {
    console.log('Pause');
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  play() {
    console.log('Play');
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  previous() {
    console.log('Previous song');
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  select(track) {
    console.log(`Select track ${track}`);
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

  stop() {
    console.log('Stop');
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  }

}

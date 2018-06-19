module.exports = class FluentAsyncControlWrong {

  next(callback) {
    console.log('Next song');
    setTimeout(() => {
      console.log('Next song callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
    return this;
  }

  pause(callback) {
    console.log('Pause');
    setTimeout(() => {
      console.log('Pause callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
    return this;
  }

  play(callback) {
    console.log('Play');
    setTimeout(() => {
      console.log('Play callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
    return this;
  }

  previous(callback) {
    console.log('Previous song');
    setTimeout(() => {
      console.log('Previous song callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
    return this;
  }

  select(track, callback) {
    console.log(`Select track ${track}`);
    setTimeout(() => {
      console.log('Select track callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
    return this;
  }

  stop(callback) {
    console.log('Stop');
    setTimeout(() => {
      console.log('Stop callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
    return this;
  }

}

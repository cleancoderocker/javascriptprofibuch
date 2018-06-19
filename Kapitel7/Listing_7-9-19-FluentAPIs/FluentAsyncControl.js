class FluentAsyncControl {

  next(callback) {
    console.log('Next song');
    setTimeout(() => {
      console.log('Next song callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
  }

  pause(callback) {
    console.log('Pause');
    setTimeout(() => {
      console.log('Pause callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
  }

  play(callback) {
    console.log('Play');
    setTimeout(() => {
      console.log('Play callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
  }

  previous(callback) {
    console.log('Previous song');
    setTimeout(() => {
      console.log('Previous song callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
  }

  select(track, callback) {
    console.log(`Select track ${track}`);
    setTimeout(() => {
      console.log('Select track callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
  }

  stop(callback) {
    console.log('Stop');
    setTimeout(() => {
      console.log('Stop callback');
      if (typeof callback === 'function') {
        callback();
      }
    }, 500);
  }

}

const API = (previousActions = Promise.resolve(), instance) => {
  return {
    next: () => 
      API(previousActions
        .then(() => new Promise((resolve, reject) => {
          instance.next(resolve);
        })), instance),
    pause: () => 
      API(previousActions
        .then(() => new Promise((resolve, reject) => {
          instance.pause(resolve);
        })), instance),
    play: () => 
      API(previousActions
        .then(() => new Promise((resolve, reject) => {
          instance.play(resolve);
        })), instance),
    previous: () => 
      API(previousActions
        .then(() => new Promise((resolve, reject) => {
          instance.previous(resolve);
        })), instance),
    select: (track) => 
      API(previousActions
        .then(() => new Promise((resolve, reject) => {
          instance.select(track, resolve);
        })), instance),
    stop: () => 
      API(previousActions
        .then(() => new Promise((resolve, reject) => {
          instance.stop(resolve);
        })), instance)
  };
}

const build = () => {
  const control = new FluentAsyncControl();
  return API(undefined, control);
}
module.exports.build = build;

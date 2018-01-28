class FluentAsyncControlOptimized {

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

const wrap = (previousActions, instance, method, ...args) =>
  previousActions.then(() => new Promise((resolve, reject) => {
    instance[method](...args, resolve);
  }));

const API = (previousActions = Promise.resolve(), instance) => {
  return {
    next: () => API(wrap(previousActions, instance, 'next'), instance),
    pause: () => API(wrap(previousActions, instance, 'pause'), instance),
    play: () => API(wrap(previousActions, instance, 'play'), instance),
    previous: () => API(wrap(previousActions, instance, 'previous'), instance),
    select: (track) => API(wrap(previousActions, instance, 'select', track), instance),
    stop: () => API(wrap(previousActions, instance, 'stop'), instance)
  };
}

const build = () => {
  const control = new FluentAsyncControlOptimized();
  return API(undefined, control);
}
module.exports.build = build;

class FluentAsyncControlAsyncAwait {

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

const wrap = async (previousActions, instance, method, ...args) => {
	await previousActions;
	await instance[method](...args);
}

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
  const control = new FluentAsyncControlAsyncAwait();
  return API(undefined, control);
}
module.exports.build = build;

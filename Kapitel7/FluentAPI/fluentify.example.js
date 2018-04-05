const AsyncControlPromises = require('./AsyncControlPromises');
const instance = new AsyncControlPromises();
instance
  .play()
  .then(() => instance.pause())
  .then(() => instance.select(7))
  .then(() => instance.play())
  .then(() => instance.next())
  .then(() => instance.next())
  .then(() => instance.previous())
  .then(() => instance.play())
  .then(() => instance.stop());

const fluentify = require('./fluentify');
const control = fluentify(instance);
control
  .play()
  .pause()
  .select(7)
  .play()
  .next()
  .previous()
  .play()
  .stop();

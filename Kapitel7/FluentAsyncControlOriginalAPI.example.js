const FluentAsyncControlOriginalAPI = require('./FluentAsyncControlOriginalAPI');
const control = FluentAsyncControlOriginalAPI.build();
const originalAPI = control.instance()

// Verwendung der Fluent API
control
  .play()
  .pause()
  .select(7)
  .play()
  .next()
  .previous()
  .play()
  .stop();

// Verwendung der Original-API mit Promises
originalAPI
  .play()
  .then(() => originalAPI.pause())
  .then(() => originalAPI.select(7))
  .then(() => originalAPI.play())
  .then(() => originalAPI.next())
  .then(() => originalAPI.next())
  .then(() => originalAPI.previous())
  .then(() => originalAPI.play())
  .then(() => originalAPI.stop());

// Verwendung der Original-API mit async/await
(async () => {
  await originalAPI.play();
  await originalAPI.pause();
  await originalAPI.select(7);
  await originalAPI.play();
  await originalAPI.next();
  await originalAPI.previous();
  await originalAPI.play();
  await originalAPI.stop();
})();

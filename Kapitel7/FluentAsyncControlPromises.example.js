const FluentAsyncControlPromises = require('./FluentAsyncControlPromises');
const control = FluentAsyncControlPromises.build();
control
  .play()
  .pause()
  .select(7)
  .play()
  .next()
  .previous()
  .play()
  .stop();

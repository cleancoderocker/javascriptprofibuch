const FluentAsyncControlAsyncAwait = require('./FluentAsyncControlAsyncAwait');
const control = FluentAsyncControlAsyncAwait.build();
control
  .play()
  .pause()
  .select(7)
  .play()
  .next()
  .previous()
  .play()
  .stop();

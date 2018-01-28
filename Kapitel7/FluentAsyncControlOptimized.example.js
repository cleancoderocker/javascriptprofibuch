const FluentAsyncControlOptimized = require('./FluentAsyncControlOptimized');
const control = FluentAsyncControlOptimized.build();
control
  .play()
  .pause()
  .select(7)
  .play()
  .next()
  .previous()
  .play()
  .stop();

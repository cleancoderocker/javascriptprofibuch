const FluentAsyncControlWrong = require('./FluentAsyncControlWrong');
const control = new FluentAsyncControlWrong();
control
  .play()
  .pause()
  .select(7)
  .play()
  .next()
  .previous()
  .play()
  .stop();
  
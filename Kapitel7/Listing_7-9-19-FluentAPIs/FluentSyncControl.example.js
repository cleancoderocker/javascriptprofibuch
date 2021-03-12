const FluentSyncControl = require('./FluentSyncControl');
const control = new FluentSyncControl();
control
  .play()
  .pause()
  .select(7)
  .play()
  .next()
  .previous()
  .play()
  .stop();

const button = {
  handler: null,
  // Funktion, die einen Callback-Handler erwartet
  onClick: function(handler) {
    this.handler = handler;
  },
  click: function() {
    this.handler();
  }
};
const handler = {
  log: function() {
    console.log('Button geklickt.');
  },
  // Objektmethode, die weiter unten als Callback-Handler registriert wird
  handle: function() {
    this.log();
  }
};
// Registrieren des Callback-Handlers
const functionBoundToHandler = handler.handle.bind(handler);
// Implizites Aktivieren des Callback-Handlers
button.onClick(functionBoundToHandler);

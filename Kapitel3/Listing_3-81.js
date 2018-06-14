(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Globales Modul
    root.returnExports = factory(root.jQuery);
  }
})(this, function($) {
  // Private API
  function myFunc() {}
  // Öffentliche API
  return myFunc;
});

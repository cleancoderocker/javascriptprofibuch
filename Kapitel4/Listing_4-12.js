var constantsModule = (function() {
  var constants = {};
  return {
    define: function(name, value) {
      if (this.isDefined(name)) {
        return false;
      }
      constants[name] = value;
      return true;
    },
    isDefined: function(name) {
      return Object.prototype.hasOwnProperty.call(constants, name);
    },
    get: function(name) {
      if (this.isDefined(name)) {
        return constants[name];
      }
      return null;
    }
  };
})();
console.log(constantsModule.isDefined('MAXIMUM')); // false
constantsModule.define('MAXIMUM', 200000);
console.log(constantsModule.get('MAXIMUM')); // 200000
console.log(constantsModule.isDefined('MAXIMUM')); // true
constantsModule.define('MAXIMUM', 700000); // ohne Wirkung
console.log(constantsModule.get('MAXIMUM')); // 200000

const compositionWithContext = function(f, g) {
  return function() {
    return f.call(this, g.apply(this, arguments));
  };
};

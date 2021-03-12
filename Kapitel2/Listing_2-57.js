const compositionGeneric = function() {
  const functions = arguments;
  return function() {
    let args = arguments;
    for (let i = functions.length; i-- > 0; ) {
      args = [functions[i].apply(this, args)];
    }
    return args[0];
  };
};

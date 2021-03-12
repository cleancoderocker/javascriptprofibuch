function partial(aFunction, ...parametersBound) {
  return function(...parametersUnbound) {
    return aFunction(...parametersBound, ...parametersUnbound);
  };
}

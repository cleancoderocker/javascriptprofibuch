function volume(x, y, z) {
  return x * y * z;
}
function volumeFactory() {
  const parametersBound = Array.prototype.slice.call(arguments, 0);
  console.log(parametersBound); // im Beispiel: [2, 4]
  return function() {
    const parametersUnbound = Array.prototype.slice.call(arguments, 0);
    console.log(parametersUnbound); // im Beispiel: [5]
    const allParameters = parametersBound.concat(parametersUnbound);
    console.log(allParameters); // im Beispiel: [2, 4, 5]
    return volumen.apply(this, allParameters);
  };
}
const volumeX2Y4 = volumeFactory(2, 4);
console.log(volumeX2Y4(5));

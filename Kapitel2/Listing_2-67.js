function volume(x, y, z) {
  return x * y * z;
}
function volumeX(x) {
  return function(y, z) {
    return volume(x, y, z);
  };
}
const volumeX5 = volumeX(5);
console.log(volumeX5(2, 2));
console.log(volumeX5(3, 3));
console.log(volumeX5(4, 4));
console.log(volumeX5(5, 5));

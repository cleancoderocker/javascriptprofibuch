function volume(x, y, z) {
  return x * y * z;
}
function volumeX5(y, z) {
  return volume(5, y, z);
}
console.log(volumeX5(2, 2));
console.log(volumeX5(3, 3));
console.log(volumeX5(4, 4));
console.log(volumeX5(5, 5));

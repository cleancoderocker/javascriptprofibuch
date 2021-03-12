function printNames() {
  Array.prototype.forEach.call(arguments, function(argument) {
    console.log(argument);
  });
}
printNames('Max', 'Moritz');

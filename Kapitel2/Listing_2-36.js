function printNames() {
  Array.prototype.forEach.apply(arguments, [
    function(argument) {
      console.log(argument);
    }
  ]);
}
printNames('Max', 'Moritz');

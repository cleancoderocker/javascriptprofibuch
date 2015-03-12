function gebeNamenAus() {
    Array.prototype.forEach.call(arguments, function(argument) {
        console.log(argument);
    });
}
gebeNamenAus('Max', 'Moritz');
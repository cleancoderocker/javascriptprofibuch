function gebeNamenAus() {
    Array.prototype.forEach.apply(arguments, [function(argument) {
        console.log(argument);
    }]);
}
gebeNamenAus('Max', 'Moritz');
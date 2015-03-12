function partial(funktion /*, parameter...*/) {
    var parameterGebunden = Array.prototype.slice.call(arguments, 1);
    return function() {
        var parameterUngebunden = Array.prototype.slice.call(arguments, 0);
        return funktion.apply(this, parameterGebunden.concat(parameterUngebunden));
    };
}
function erstellePerson(nachname, vorname) {
    return {
        nachname: nachname,
        vorname: vorname
    };
}
var erstelleMustermann = partial(erstellePerson, 'Mustermann');
var max = erstelleMustermann('Max');
console.log(max); // { name: 'Mustermann', vorname: 'Max' }
var moritz = erstelleMustermann('Moritz');
console.log(moritz); // { name: 'Mustermann', vorname: 'Moritz' }
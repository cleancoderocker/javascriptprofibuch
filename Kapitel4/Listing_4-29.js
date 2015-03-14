function erstellePerson(name, nachname) {
    name = name || 'Max';
    nachname = nachname || 'Mustermann';
    return {
        name: name,
        nachname: nachname
    }
}
var ben = erstellePerson('Ben', 'Harper');
// {name: "Ben", nachname: "Harper"}
var moritz = erstellePerson('Moritz');
// {name: "Moritz", nachname: "Mustermann"}
var max = erstellePerson('Max');
// {name: "Max", nachname: "Mustermann"}
var herrSchuster = erstellePerson(undefined, 'Schuster');
// {name: "Max", nachname: "Schuster"}
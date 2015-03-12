function erstellePerson(name, nachname) {
    name = name || 'Max';
    nachname = nachname || 'Mustermann';
    return {
        name: name,
        nachname: nachname,
    }
}
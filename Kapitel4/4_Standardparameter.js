function erstellePerson(name, nachname) {
    name = name || 'Max';
    nachname = nachname || 'Mustermann';
    return {
        name: name,
        nachname: nachname,
    }
}


function erstellePerson(name, nachname) {
    return {
        name: typeof name !== 'undefined' && name !== null ?  name : 'Max',
        nachname: typeof nachname !== 'undefined' && nachname !== null ?  nachname : 'Mustermann'
    }
}

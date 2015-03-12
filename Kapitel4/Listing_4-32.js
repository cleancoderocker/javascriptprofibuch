function standardNachname() {
    return 'Mustermann';
}
function erstellePerson(name = 'Max', nachname = standardNachname()) {
    return {
        name: name,
        nachname: nachname
    }
}
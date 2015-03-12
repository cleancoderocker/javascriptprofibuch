function erstellePerson(name, nachname, groesse, gewicht, geburtstag,
                        geburtsmonat, geburtsjahr) {
    return {
        name: name,
        nachname: nachname,
        groesse: groesse,
        gewicht: gewicht,
        geburtstag: geburtstag,
        geburtsmonat: geburtsmonat,
        geburtsjahr: geburtsjahr
    }
}
var person = erstellePerson('Max', 'Mustermann', 180, 79, 2, 4, 1956);
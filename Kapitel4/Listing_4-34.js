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
var person = erstellePerson(
    {
        name: 'Max',
        nachname: 'Mustermann',
        groesse: 180,
        gewicht: 79,
        geburtstag: 2,
        geburtsmonat: 4,
        geburtsjahr: 1956
    }
);
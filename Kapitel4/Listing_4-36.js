function erstellePerson(daten) {
    return {
        name: daten.name,
        nachname: daten.nachname,
        groesse: daten.groesse,
        gewicht: daten.gewicht,
        geburtstag: daten.geburtstag,
        geburtsmonat: daten.geburtsmonat,
        geburtsjahr: daten.geburtsjahr
    }
}
var person = erstellePerson(
    {
        geburtsjahr: 1956
    }
);
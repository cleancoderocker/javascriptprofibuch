function erstellePerson(name, nachname, groesse, gewicht, geburtstag, geburtsmonat, geburtsjahr) {
    return {
        name,
        nachname,
        groesse,
        gewicht,
        geburtstag,
        geburtsmonat,
        geburtsjahr
    }
}
var person = erstellePerson('Max', 'Mustermann');
console.log(person.name);
console.log(person.nachname);
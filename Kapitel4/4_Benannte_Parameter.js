var person = erstellePerson('Max', 'Mustermann', 180, 79, 2, 4, 1956);
function erstellePerson(name, nachname, groesse, gewicht, geburtstag, geburtsmonat, geburtsjahr) {
  // erstelle die Person
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


var person = erstellePerson('Max', 'Mustermann', {groesse: 180, gewicht: 79, geburtstag: 2, geburtsmonat: 4, geburtsjahr: 1956});
function erstellePerson(name, nachname, daten) {
  // erstelle die Person
  return {
    name: name, 
    nachname: nachname, 
    groesse: daten.groesse, 
    gewicht: daten.gewicht, 
    geburtstag: daten.geburtstag, 
    geburtsmonat: daten.geburtsmonat, 
    geburtsjahr: daten.geburtsjahr
  }
}

var person = erstellePerson('Max', 'Mustermann', groesse=180, gewicht=79, geburtstag=2, geburtsmonat=4, geburtsjahr=1956);
function erstellePerson(name, nachname, groesse, gewicht, geburtstag, geburtsmonat, geburtsjahr) {
  // erstelle die Person
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

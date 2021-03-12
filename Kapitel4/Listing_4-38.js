function createPerson(
  firstName,
  lastName,
  height,
  weight,
  dayOfBirth,
  monthOfBirth,
  yearOfBirth
) {
  return {
    firstName: firstName,
    lastName: lastName,
    height: height,
    weight: weight,
    dayOfBirth: dayOfBirth,
    monthOfBirth: monthOfBirth,
    yearOfBirth: yearOfBirth
  };
}
var person = createPerson(
  null, // Name
  null, // Nachname
  null, // Größe
  null, // Gewicht
  null, // Geburtstag
  null, // Geburtsmonat
  1956 	// Geburtsjahr
);

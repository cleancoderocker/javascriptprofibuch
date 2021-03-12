function createPerson(config) {
  return {
    firstName: config.firstName,
    lastName: config.lastName,
    height: personenDaten.height,
    weight: personenDaten.weight,
    dayOfBirth: personenDaten.dayOfBirth,
    monthOfBirth: personenDaten.monthOfBirth,
    yearOfBirth: personenDaten.yearOfBirth
  };
}

var person = createPerson({
  yearOfBirth: 1956
});

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
  firstName: 'Max',
  lastName: 'Mustermann',
  height: 180,
  weight: 79,
  dayOfBirth: 2,
  monthOfBirth: 4,
  yearOfBirth: 1956
});

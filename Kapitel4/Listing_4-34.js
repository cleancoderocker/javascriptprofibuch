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
var person = createPerson('Max', 'Mustermann', 180, 79, 2, 4, 1956);

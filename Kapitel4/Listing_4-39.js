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

const person = createPerson(
  firstName = 'Max',
  lastName = 'Mustermann',
  height = 180,
  weight = 79,
  dayOfBirth = 2,
  monthOfBirth = 4,
  yearOfBirth = 1956
);
console.log(person);

// {
//   firstName: 'Max',
//   lastName: 'Mustermann',
//   height: 180,
//   weight: 79,
//   dayOfBirth: 2,
//   monthOfBirth: 4,
//   yearOfBirth: 1956
// }
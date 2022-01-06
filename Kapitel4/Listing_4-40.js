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

const person = createPerson(yearOfBirth = 1979);
console.log(person);

// {
//   firstName: 1979,
//   lastName: undefined,
//   height: undefined,
//   weight: undefined,
//   dayOfBirth: undefined,
//   monthOfBirth: undefined,
//   yearOfBirth: undefined
// }
function createPerson(firstName = 'Max', lastName = 'Mustermann') {
  return {
    firstName: firstName,
    lastName: lastName
  };
}
const moritz = createPerson('Moritz');
console.log(moritz.name); // 'Moritz'
console.log(moritz.nachname); // 'Mustermann'
const misterNull = createPerson(undefined, null);
console.log(misterNull.name); // 'Max'
console.log(misterNull.nachname); // null

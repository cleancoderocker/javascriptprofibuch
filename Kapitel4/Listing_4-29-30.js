function createPerson(firstName, lastName) {
  firstName = firstName || 'Max';
  lastName = lastName || 'Mustermann';
  return {
    firstName: firstName,
    lastName: lastName
  };
}

const ben = createPerson('Ben', 'Harper');
// {name: "Ben", nachname: "Harper"}
const moritz = createPerson('Moritz');
// {name: "Moritz", nachname: "Mustermann"}
const max = createPerson('Max');
// {name: "Max", nachname: "Mustermann"}
const herrSchuster = createPerson(undefined, 'Schuster');
// {name: "Max", nachname: "Schuster"}

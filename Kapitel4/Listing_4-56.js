const person = {
  firstname: 'Max',
  lastName: 'Mustermann',
  address: {
    postalCode: 23456,
    street: 'Musterstraße 22'
  }
};
const {
  firstName: firstNameExtracted,
  lastName: lastNameExtracted,
  address: { postCode: postCodeExtracted, street: streetExtracted }
} = person;

const person = {
  firstname: 'Max',
  lastName: 'Mustermann',
  address: {
    postCode: 23456,
    street: 'Musterstraße 22'
  },
  phoneNumbers: [23452345678, 2345623456]
};
const {
  firstName: firstNameExtracted,
  lastName: lastNameExtracted,
  address: { postCode: postCodeExtracted, street: streetExtracted },
  phoneNumbers: [phoneNumber1Extracted, phoneNumber2Extracted]
} = person;

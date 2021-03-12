console.log(checkAge(22)); // true
console.log(checkAge(-22)); // Error: Alter darf nicht negativ sein
function checkAge(age) {
  if (age < 0) {
    throw new Error('Alter darf nicht negativ sein.');
  } else {
    return true;
  }
}

function partial(aFunction /*, parameter...*/) {
  const parametersBound = Array.prototype.slice.call(arguments, 1);
  return function() {
    const parametersUnbound = Array.prototype.slice.call(arguments, 0);
    return aFunction.apply(this, parametersBound.concat(parametersUnbound));
  };
}
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName
  };
}
const createMustermann = partial(createPerson, 'Mustermann');
const max = createMustermann('Max');
// Ausgabe: { firstName: 'Max', lastName: 'Mustermann' }
console.log(max);
// Ausgabe: { firstName: 'Moritz', lastName: 'Mustermann' }
const moritz = createMustermann('Moritz');
console.log(moritz);

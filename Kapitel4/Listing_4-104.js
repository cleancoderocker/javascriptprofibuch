const name = 'Max Mustermann';
let message = tagFunction`Mein Name ist ${name}, ich bin ${44} Jahre jung`;
console.log(message); // Mein Name ist Max Mustermann, ich bin 44 Jahre jung
message = tagFunction`Mein Name ist ${name}, ich bin ${88} Jahre jung`;
console.log(message); // Mein Name ist Max Mustermann
function tagFunction(strings, ...values) {
  let name = values[0];
  let age = values[1];
  if (age > 80) {
    return `${strings[0]}${values[0]}`;
  }
  return `${strings[0]}${name}${strings[1]}${age}${strings[2]}`;
}

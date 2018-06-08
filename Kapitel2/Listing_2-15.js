function getFirstNameGlobal() {
  return this.name;
}
console.log(getFirstNameGlobal()); // undefined

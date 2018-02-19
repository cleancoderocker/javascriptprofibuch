export default class Person {

	/**
   	* @param {string} firstName - First name of the person.
	* @param {string} lastName - Last name of the person.
	* @param {number} age - Age of the person.
	*/
	constructor(firstName, lastName, age) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._age = age;
	}

	greet() {
		return 'Hello';
	}

	toString() {
		return `${this.firstName} ${this.lastName}, ${this.age} old.`;
	}

	get firstName() {
		return this._firstName;
	}

	set firstName(firstName) {
		this._firstName = firstName;
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(lastName) {
		this._lastName = lastName;
	}

	get age() {
		return this._age;
	}

	set age(age) {
		this._age = age;
	}

}

const Shape = require('./Shape');

module.exports = class Square extends Shape {

	constructor(length) {
		super();
		this._length = length;
	}

	get length() {
		return this._length;
	}

	set length(length) {
	  this._length = length;
	}

	get area() {
		return this.length * this.length;
	}

}

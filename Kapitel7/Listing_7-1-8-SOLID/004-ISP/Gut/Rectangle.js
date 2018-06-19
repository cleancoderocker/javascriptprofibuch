const Shape = require('./Shape');

module.exports = class Rectangle extends Shape {

	constructor(width, height) {
		super();
		this._width = width;
		this._height = height;
	}

	get width() {
		return this._width;
	}

	set width(width) {
	  this._width = width;
	}

	get height() {
		return this._height;
	}
  
	set height(height) {
	  this._height = height;
	}
  
	get area() {
		return this.width * this.height;
	}

}

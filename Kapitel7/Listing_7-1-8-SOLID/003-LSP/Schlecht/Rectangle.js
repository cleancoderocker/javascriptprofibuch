module.exports = class Rectangle {

	constructor() {
		this._width = 0;
		this._height = 0;
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

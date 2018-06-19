const Rectangle = require('./Rectangle');
const Square = require('./Square');

const shapes = [
	new Rectangle(5, 9), 
	new Rectangle(5, 9), 
	new Square(5)
];

const printArea = (shapes) => {
	shapes.forEach((shape) => {
		const area = shape.area;
		console.log(area);
	});
}

printArea(shapes);

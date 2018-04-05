const Rectangle = require('./Rectangle');
const Square = require('./Square');

const rectangles = [
	new Rectangle(), 
	new Rectangle(), 
	new Square()
];

const init = (rectangles) => {
	rectangles.forEach((rectangle) => {
		rectangle.width = 5;
		rectangle.height = 9;
	});
};

const printArea = (rectangles) => {
	rectangles.forEach((rectangle) => {
		const area = rectangle.area;
		console.log(area);
	});
}

init(rectangles);
printArea(rectangles);

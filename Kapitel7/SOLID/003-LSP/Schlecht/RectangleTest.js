const assert = require('assert');
const Rectangle = require('./Rectangle');
const Square = require('./Square');

describe('Rectangle', () => {
  describe('area()', () => {
    it('should return the area based on heigth and width', () => {
      // Test mit Rectangle
      const rectangle = new Rectangle();
      rectangle.height = 7;
      rectangle.width = 8;
      assert.equal(rectangle.area, 56);
    });
    it('should return the area based on heigth and width', () => {
      // Test mit Square
      const rectangle = new Square();
      rectangle.height = 7;
      rectangle.width = 8;
      assert.equal(rectangle.area, 56); // Schlägt fehl
    });
  });
});

const ShoeBox = function(width, depth, height) {
  this.width = width;
  this.depth = depth;
  this.height = height;
  this.implementsInterfaces = ['Box'];
  this.getWidth = function() {
    return width;
  };
  this.getDepth = function() {
    return depth;
  };
  this.getHeight = function() {
    return height;
  };
  return {
    implementsInterfaces: this.implementsInterfaces,
    getWidth: this.getWidth,
    getDepth: this.getDepth,
    getHeight: this.getHeight
  };
};

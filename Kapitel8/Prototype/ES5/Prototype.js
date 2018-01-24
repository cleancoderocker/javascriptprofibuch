(function() {
	var cube= {
		width: 20,
		depth: 20,
		height: 20,
		color: 'weiß',
		setWidth: function(width) {
			this.width = width; 
		},
		getWidth: function() {
			return this.width;
		},
		setDepth: function(depth) {
			this.depth = depth; 
		},
		getDepth: function() {
			return this.depth;
		},
		setHeight: function(height) {
			this.height = height; 
		},
		getHeight: function() { 
			return this.height;
		},
		setColor: function(color) {
			this.color = color; 
		},
		getColor: function() { 
			return this.color;
		}
	}
	const yellowCube= Object.create(cube); 
	yellowCube.setColor('gelb');
	const blueCube = Object.create(cube); 
	blueCube.setColor('blau');
	console.log(cube.getColor());       // weiß
	console.log(yellowCube.getColor()); // gelb
	console.log(blueCube.getColor());   // blau
	console.log(yellowCube.getWidth());	// 20
	console.log(blueCube.getWidth());   // 20
	cube.setWidth(40); 
	console.log(yellowCube.getWidth()); // 40
	console.log(blueCube.getWidth());   // 40
	yellowCube.setWidth(60); 
	console.log(yellowCube.getWidth()); // 60
	console.log(blueCube.getWidth());   // 40
})();

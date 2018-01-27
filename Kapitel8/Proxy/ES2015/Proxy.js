(function() {
	const profiler = {
		accesses: 0,
		get: function(proxy, name) {
			this.accesses ++;
			return proxy[name];
		}, 
		getAccesses: function() {
			return this.accesses;
		}
	}
	  
	const person = new Proxy({}, profiler);
	person.name = 'Max';
	for(let i=0; i<9; i++) {
		console.log(person.name);
	}
	console.log(profiler.getAccesses());	  
})();

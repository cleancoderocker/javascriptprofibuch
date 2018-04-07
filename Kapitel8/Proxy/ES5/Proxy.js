(function() {
    var target = {'firstName' : 'Max'};
	var proxy = Object.create(Object.getPrototypeOf(target), {});
	Object.getOwnPropertyNames(target).forEach(function(property) {
		var pd = Object.getOwnPropertyDescriptor(target, property);
		Object.defineProperty(proxy, property, {
			set: function(value) {
				console.log('setze ' + value + ' für Eigenschaft ' + property);
				target[property] = value;
			},
			get: function() {
				console.log('liefere ' + target[property] + 
					' von Eigenschaft ' + property);
			return target[property];
			}
		});
		// Kopieren der Property-Decriptor-Attribute
		return proxy;
	});
	console.log(proxy.firstName); // 'Max'
	target.lastName = 'Mustermann';
	console.log(proxy.lastName); // undefined
})();
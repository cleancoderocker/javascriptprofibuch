casper.test.begin('Heise Homepage', 1, (test) => {
	
	casper.start('http://www.heise.de/', () => {
		const headlines = casper.evaluate(() => {
			const h2s = document.getElementsByTagName('h2');
			const result = new Array();
			for (let i = 0; i < h2s.length; i++) {
				result[i] = h2s[i].textContent;
			}
			return result;
		});
		test.assertEquals(
			headlines.length, 
			6,
			'hat die richtige Anzahl an Überschriften der Ebene 2'
		);
	});
	
	casper.run(() => {
		test.done();
	});
	
});

casper.test.begin('Heise Web-Site Test', 4, (test) => {

	casper.start('http://www.heise.de/', () => {
		this.echo('URL: ' + this.getCurrentUrl());
		test.assertTitle(
			'heise online - IT-News, Nachrichten und Hintergründe', 
			'hat den richtigen Titel');
		test.assertTitleMatch(/heise/, 'enthält "heise" im Titel');
		test.assertHttpStatus(200, 'gibt 200 als HTTP-Status zurück');
	});

	casper.then(() => {
		this.clickLabel('Newsticker', 'a');
	});

	casper.then(() => {
		this.echo('URL: ' + this.getCurrentUrl());
		test.assertTitleMatch(/heise/, 'enthält "heise" im Titel');
	});

	casper.run(() => {
	  test.done();
	});

});
  
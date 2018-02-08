const casper = require('casper').create();

casper.start('http://www.heise.de/', () => {
	this.echo(this.getTitle());
});

casper.then(() => {
	this.clickLabel('Newsticker', 'a');
});

casper.then(() => {
	this.echo(this.getTitle());
	this.capture('ix.png', {
		top: 0, left: 00, width: 800, height: 600
	});
});

casper.thenOpen('http://www.heise.de/ix/', () => {
	this.echo(this.getTitle());
	this.download(this.getCurrentUrl(), 'ix.html');
});

casper.run();

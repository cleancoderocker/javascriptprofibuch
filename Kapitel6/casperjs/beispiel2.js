casper.test.begin('Heise Web-Site Test', 4, function suite(test) {
    casper.start("http://www.heise.de/", function () {
        this.echo('URL: ' + this.getCurrentUrl());
        test.assertTitle("heise online - IT-News, Nachrichten und Hintergründe", "hat den richtigen Titel");
        test.assertTitleMatch(/heise/, "enthält 'heise' im Titel");
        test.assertHttpStatus(200, "gibt 200 als HTTP-Status zurück");
    });
    casper.then(function () {
        this.clickLabel("Newsticker", "a");
    });
    casper.then(function () {
        this.echo('URL: ' + this.getCurrentUrl());
        test.assertTitleMatch(/heise/, "enthält 'heise' im Titel");
    });
    casper.run(function () {
        test.done();
    });
});
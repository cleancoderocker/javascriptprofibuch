var webseite = require('webpage').create();
var url = 'https://www.galileo-press.de/';
webseite.open(url, function (status) {
    if (status == 'success') {
        var titel = webseite.evaluate(function () {
            return document.title;
        });
        console.log(titel);
    }
    phantom.exit();
});

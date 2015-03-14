var webseite = require('webpage').create();
var url = 'https://www.galileo-press.de/';
webseite.onResourceRequested = function (request, networkRequest) {
    console.log("request: " + request.url);
};
webseite.onResourceReceived = function (response) {
    console.log("response: " + response.url);
};
webseite.open(url, function (status) {
    if (status == 'success') {
        console.log(JSON.stringify(webseite.cookies, null, 2));
    }
    phantom.exit();
});

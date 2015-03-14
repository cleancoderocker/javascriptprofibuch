var path = require('path');
var srcDir = path.join(__dirname, '..', 'src');

require('blanket')({
    pattern: srcDir
});
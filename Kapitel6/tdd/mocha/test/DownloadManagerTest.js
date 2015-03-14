/**
 * Created by philipackermann on 09.06.14.
 */
var DownloadManager = require('../src/DownloadManager').DownloadManager;
var assert = require("assert");
describe('DownloadManager', function() {
    describe('#download()', function(){
        it('should download the content of a text file', function(done){
            DownloadManager.download('http://www.example.com/example.txt', function(content) {
                assert.equal(content, 'Inhalt der Textdatei');
                done();
            });
        });
    });
});
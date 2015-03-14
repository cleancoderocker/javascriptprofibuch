/**
 * Created by philipackermann on 20.10.14.
 */
var DownloadManager = require('../src/DownloadManager').DownloadManager;
var assert = require('assert');
var sinon = require('../bower_components/sinon/lib/sinon');
describe('DownloadManager', function() {
    describe('#downloadFinished()', function(){
        it('should call the registered listener', function(){
            var downloadManager = new DownloadManager();
            var spy = sinon.spy();
            downloadManager.addListener(spy);
            downloadManager.downloadFinished();
            assert.equal(spy.callCount, 1);
        });
    });
});
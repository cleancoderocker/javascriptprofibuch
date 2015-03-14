QUnit.module('DownloadManagerTest');

QUnit.asyncTest('Download einer Textatei', function(assert) {
    DownloadManager.download('http://www.example.com/example.txt', function(content) {
        assert.equal(content, 'Inhalt der Textdatei');
        QUnit.start();
    });
});
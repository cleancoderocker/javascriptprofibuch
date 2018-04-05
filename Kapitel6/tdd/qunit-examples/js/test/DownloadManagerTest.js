QUnit.module('DownloadManagerTest');

QUnit.test('Download einer Textatei', function(assert) {
	let done = assert.async();
    DownloadManager.download('http://www.example.com/example.txt', function(content) {
        assert.equal(content, 'Inhalt der Textdatei');
        done();
    });
});
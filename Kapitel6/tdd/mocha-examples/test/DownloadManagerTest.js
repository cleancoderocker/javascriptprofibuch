const { DownloadManager } = require('../src/DownloadManager');
const assert = require("assert");
describe('DownloadManager', () => {
  describe('#download()', () => {
    it('should download the content of a text file', (done) => {
      DownloadManager.download('http://www.example.com/example.txt',
      (content) => {
        assert.equal(content, 'Inhalt der Textdatei');
        done();
      });
    });
  });
});

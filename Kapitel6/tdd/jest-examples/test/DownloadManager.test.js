const { DownloadManager } = require('../src/DownloadManager');
const assert = require("assert");
describe('DownloadManager', () => {
  describe('#download()', () => {
    it('should download the content of a text file', (done) => {
      DownloadManager.download('http://www.example.com/example.txt',
      (content) => {
		expect(content).toEqual('Inhalt der Textdatei');
        done();
      });
    });
  });
});

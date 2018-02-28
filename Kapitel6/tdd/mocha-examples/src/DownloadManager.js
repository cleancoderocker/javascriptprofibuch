const DownloadManager = {
	download(url, callback) {
	  setTimeout(() => {
		callback('Inhalt der Textdatei');
	  }, 2000);
	}
  }
module.exports.DownloadManager = DownloadManager;
  
var DownloadManager = {
    download: function(url, callback) {
        setTimeout(function() {
            callback('Inhalt der Textdatei');
        }, 2000);
    }
}
module.exports.DownloadManager = DownloadManager;
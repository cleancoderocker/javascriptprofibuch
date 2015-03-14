var DownloadManager = {
    download: function(url, callback) {
        setTimeout(function() {
            callback('Inhalt der Textdatei');
        }, 5000);
    }
}
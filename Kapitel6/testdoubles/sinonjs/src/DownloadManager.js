/**
 * Created by philipackermann on 20.10.14.
 */
function DownloadManager() {
    this.listeners = [];
};
DownloadManager.prototype.addListener = function(listener) {
    this.listeners.push(listener);
};
DownloadManager.prototype.downloadFinished = function() {
    for(var i=0; i<this.listeners.length; i++) {
        this.listeners[i]();
    }
};
module.exports.DownloadManager = DownloadManager;
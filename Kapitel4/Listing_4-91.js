if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function (str){
        return this.substring(0, str.length) === str;
    };
}
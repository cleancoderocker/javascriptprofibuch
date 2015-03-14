var DOMListSorter = {
    sort: function(domList) {
        var items = Array.prototype.filter.call(domList.childNodes, function(item) {
            return item.nodeType === 1;
        }).sort(function(item1, item2) {
            return item1.textContent.localeCompare(item2.textContent);
        });
        while (domList.firstChild) {
            domList.removeChild(domList.firstChild);
        }
        items.forEach(function(item) {
            domList.appendChild(item);
        });
    }
}
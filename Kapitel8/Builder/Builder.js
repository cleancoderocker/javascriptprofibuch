(function () {
    var TableBuilder = function() {
        var table = document.createElement('table');
        var numberOfRows = 0;
        var numberOfColumns = 0;
        var headerNames = [];
        return {
            buildHeaders : function(headers) {
                this.headerNames = headers;
                var tr = document.createElement('tr');
                for(var i=0; i<this.headerNames.length; i++) {
                    var th = document.createElement('th');
                    var text = document.createTextNode(this.headerNames[i]);
                    th.appendChild(text);
                    tr.appendChild(th);
                }
                table.appendChild(tr);
                return this;
            },
            buildColumns : function(numberOfColumns) {
                this.numberOfColumns = numberOfColumns;
                return this;
            },
            buildRows : function(numberOfRows) {
                this.numberOfRows = numberOfRows;
                for(var i=0; i<this.numberOfRows; i++) {
                    var tr = document.createElement('tr');
                    for(var j=0; j<this.numberOfColumns; j++) {
                        var td = document.createElement('td');
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                }
                return this;
            },
            getResult : function() {
                return table;
            }
        };
    };
    var TableDirector = function() {
        var tableBuilder = new TableBuilder();
        return {
            constructArtistTable: function() {
                var table = tableBuilder
                    .buildHeaders(['Artist', 'Title'])
                    .buildColumns(2)
                    .buildRows(4)
                    .getResult();
                return table;
            }
        }
    }
    var tableDirector = new TableDirector();
    var table = tableDirector.constructArtistTable();
    document.getElementById('artist-table').appendChild(table);
})();
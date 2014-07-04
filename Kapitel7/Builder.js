/**
 * Created by philipackermann on 16.05.14.
 */
(function () {
    var TableBuilder = function() {
        var numberOfRows = 0;
        var numberOfColumns = 0;
        var headerNames = [];

        return {
            headers : function(headers) {
                this.headerNames = headers;
                return this;
            },
            columns : function(numberOfColumns) {
                this.numberOfColumns = numberOfColumns;
                return this;
            },
            rows : function(numberOfRows) {
                this.numberOfRows = numberOfRows;
                return this;
            },
            build : function() {
                var table = document.createElement("table");
                var th = document.createElement("th");
                for(var i=0; i<this.headerNames.length; i++) {
                    var td = document.createElement("td");
                    var text = document.createTextNode(this.headerNames[i]);
                    td.appendChild(text);
                    th.appendChild(td);
                }
                table.appendChild(th);
                for(var i=0; i<this.numberOfRows; i++) {
                    var tr = document.createElement("tr");
                    for(var j=0; j<this.numberOfColumns; j++) {
                        var td = document.createElement("td");
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                }
                return table;
            }
        };
    };

    var tableBuilder = new TableBuilder();
    var table = tableBuilder.rows(2).columns(4).headers(["Artist", "Title"]).build();
    console.log(table);
})();
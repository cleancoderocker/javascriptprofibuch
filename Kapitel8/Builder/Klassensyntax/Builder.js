// Hinweis: dieses Beispiel funktioniert nur im Browser
// bzw. in Laufzeitumgebungen, in denen das document-Objekt
// zur Verfügung steht.
(function () {

    class TableBuilder {

		constructor() {
			this.table = document.createElement('table');
			this.numberOfRows = 0;
			this.numberOfColumns = 0;
			this.headerNames = [];
		}

		buildHeaders(headers) {
			this.headerNames = headers;
			const tr = document.createElement('tr');
			for(let i = 0; i < this.headerNames.length; i++) {
				const th = document.createElement('th');
				const text = document.createTextNode(this.headerNames[i]);
				th.appendChild(text);
				tr.appendChild(th);
			}
			this.table.appendChild(tr);
			return this;
		}

		buildColumns(numberOfColumns) {
			this.numberOfColumns = numberOfColumns;
			return this;
		}

		buildRows(numberOfRows) {
			this.numberOfRows = numberOfRows;
			for(let i = 0; i < this.numberOfRows; i++) {
				const tr = document.createElement('tr');
				for(let j = 0; j < this.numberOfColumns; j++) {
					const td = document.createElement('td');
					tr.appendChild(td);
				}
				this.table.appendChild(tr);
			}
			return this;
		}

		getResult() {
			return this.table;
		}
	};
	
	class TableDirector {

		constructor() {
			this.tableBuilder = new TableBuilder();
		}

		constructArtistTable() {
			const table = this.tableBuilder
				.buildHeaders(['Artist', 'Title'])
				.buildColumns(2)
				.buildRows(4)
				.getResult();
			return table;
		}
	}

    const tableDirector = new TableDirector();
    const table = tableDirector.constructArtistTable();
	// document.getElementById('artist-table').appendChild(table);
	console.log(table);
})();
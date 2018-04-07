(function() {

    class Database {

        getObjects() {
            this.connect();
            const result = this.getResults();
            this.disconnect();
            return result;
		}
		
        connect() {
            console.log('Connect');
		}
		
        disconnect() {
            console.log('Disconnect');
		}
		
    }

    class ArtistRepository extends Database {

        getResults() {
            console.log('Get results');
            return [{
                name: 'Deep Purple'
            },
            {
                name: 'Queens of the Stone Age'
            }];
		}
		
	}
	
    const artistRepository = new ArtistRepository();
	const artists = artistRepository.getObjects();
	console.log(artists);

})();

(function() {
	
    class Database {

        getObjects(getResultsTemplateMethod) {
            this.connect();
            const result = getResultsTemplateMethod();
            this.disconnect();
            return result;
		}
		
        connect() {
            console.log('Connect');
		}
		
        disconnect() {
            console.log('Disconnect');
		}
		
    }

    const database = new Database();
    const artists = database.getObjects(
        () => {
            console.log('Get results');
            return [{
                    name: 'Deep Purple'
                },
                {
                    name: 'Queens of the Stone Age'
                }];
        }
	);
	console.log(artists);

})();
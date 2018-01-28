(function() {

    class Database {

        getObjects() {
            this.connect();
            var result = this.getResults();
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

})();

(function() {
	
    class Database {

        getObjects(templateMethods) {
            this.connect();
            var result = templateMethods[0]();
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
    const artists = database.getObjects([
        () => {
            console.log('Get results');
            return [{
                    name: 'Deep Purple'
                },
                {
                    name: 'Queens of the Stone Age'
                }];
        }
    ]);

})();
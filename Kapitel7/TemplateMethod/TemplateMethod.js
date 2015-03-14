(function() {
    /* Listing 7.25 */
    /* Funktioniert nur in ES6 */
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
    var artistRepository = new ArtistRepository();
    var artists = artistRepository.getObjects();

})();

(function() {
    /* Listing 7.26 */
    /* Funktioniert nur in ES6 */
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

    var database = new Database();
    var artists = database.getObjects([
        function() {
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
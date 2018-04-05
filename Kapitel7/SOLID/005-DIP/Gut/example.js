const AlbumService = require('./services/AlbumService');
const AlbumRepository = require('./persistence/MongoDBAlbumRepository');
const repository = new AlbumRepository();
const service = new AlbumService(repository);
service.createAlbum('Deep Purple', 'Made in Japan', 1972);

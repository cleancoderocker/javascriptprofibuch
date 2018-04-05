module.exports = class AlbumService {
  handleRequest(request) {
    const response = {
      requestId: request.id
    };
    switch (request.type) {
      case 'save':
        console.log('Saving album');
        response.result = {
          saved: true
        };
        break;
      case 'load':
        console.log('Loading album');
        response.result = {
          loaded: true
        };
        break;
      case 'update':
        console.log('Updating album');
        response.result = {
          updated: true
        };
        break;
    }
    return Promise.resolve(response);
  }
};

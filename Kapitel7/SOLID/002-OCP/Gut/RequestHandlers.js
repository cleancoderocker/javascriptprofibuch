class RequestHandler {
  handleRequest(request) {}
}

class SaveAlbumRequestHandler extends RequestHandler {
  handle(request) {
    console.log('saving album');
    return {
      saved: true
    };
  }
}

class LoadAlbumRequestHandler extends RequestHandler {
  handle(request) {
    console.log('loading album');
    return {
      loaded: true
    };
  }
}

class UpdateAlbumRequestHandler extends RequestHandler {
  handle(request) {
    console.log('updating album');
    return {
      updated: true
    };
  }
}

module.exports = {
  LoadAlbumRequestHandler,
  SaveAlbumRequestHandler,
  UpdateAlbumRequestHandler
};

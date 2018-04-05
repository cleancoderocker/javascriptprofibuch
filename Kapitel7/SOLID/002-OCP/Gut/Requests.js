class Request {
  constructor(type, id = Math.random()) {
    this.id = id;
    this.type = type;
  }
}

class AlbumRequest extends Request {
  constructor(album, type) {
    super(type);
  }
}

class SaveAlbumRequest extends AlbumRequest {
  constructor(album) {
    super(album, 'save');
  }
}

class LoadAlbumRequest extends AlbumRequest {
  constructor(album) {
    super(album, 'load');
  }
}

class UpdateAlbumRequest extends AlbumRequest {
  constructor(album) {
    super(album, 'update');
  }
}

module.exports = {
  LoadAlbumRequest,
  SaveAlbumRequest,
  UpdateAlbumRequest
};

const mongodb = require('mongodb');
const winston = require('winston');
const defaults = {
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGO_PORT: parseInt(process.env.MONGO_PORT, 10) || 27017,
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'examples'
};
const isString = val => typeof val === 'string';
const MongoDBMixin = superclass =>
  class extends superclass {
    constructor(config) {
      super(config);
      this.config = Object.assign({}, defaults, config);
      this.endpoint = `mongodb://${this.config.MONGO_HOST}:${
        this.config.MONGO_PORT
      }/${this.config.MONGO_DATABASE}`;
      this.connection = null;
    }
    exists(collection, id) {
      return this.connection
        .collection(collection)
        .find({ _id: id })
        .limit(-1)
        .toArray()
        .then(result => !!result.length)
        .then(
          exists =>
            exists
              ? true
              : Promise.reject({
                  message: `Entity with id ${id} does not exist`
                })
        );
    }
    insertDocument(collection, document) {
      return this.connection.collection(collection).insertOne(document);
    }
    upsertDocument(collection, query, document) {
      return this.connection
        .collection(collection)
        .updateOne(query, document, { upsert: true });
    }
    updateDocument(collection, documentId, update) {
      if (update._id) {
        delete update._id;
      }
      const updateObject = {
        $set: update
      };
      return this.connection
        .collection(collection)
        .updateOne({ _id: documentId }, updateObject)
        .then(response => response.result && response.result.ok);
    }
    getDocument(
      collection,
      documentId,
      optionalFilter = {},
      optionalProjection
    ) {
      const filter = Object.assign(optionalFilter, { _id: documentId });
      return this.connection
        .collection(collection)
        .findOne(filter, optionalProjection);
    }
    getDocuments(collection, filter = {}, optionalProjection) {
      return this.connection
        .collection(collection)
        .find(filter, optionalProjection)
        .toArray();
    }
    deleteDocument(collection, idOrCond = {}) {
      const match = isString(idOrCond) ? { _id: idOrCond } : idOrCond;
      return this.connection
        .collection(collection)
        .deleteOne(match)
        .then(response => response.result && response.result.ok);
    }
    connect() {
      return mongodb
        .connect(this.endpoint)
        .then(connection => {
          this.connection = connection;
        })
        .then(() => this.connection);
    }
  };
module.exports = MongoDBMixin;

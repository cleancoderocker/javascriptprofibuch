const winston = require('winston');
const { mix } = require('mixwith');
const AbstractBookRepository = require('../api/AbstractBookRepository');
const MongoDBMixin = require('../mixins/MongoDBMixin');

module.exports = class MongoDBBookRepository extends mix(
  AbstractBookRepository
).with(MongoDBMixin) {
  constructor(config = {}) {
    super(config);
    this.collectionName = 'books';
  }
  init() {
    return this.connect();
  }
  saveBook(book) {
    book._id = book.id;
    return this.insertDocument(this.collectionName, book).then(() => book);
  }
  findBook(id) {
    return this.getDocument(this.collectionName, id).then(book => {
      if (!book) {
        return Promise.reject({
          message: `No nook found with id ${id}.`
        });
      }
      return book;
    });
  }
  updateBook(id, book) {
    return this.updateDocument(this.collectionName, id, book);
  }
  deleteBook(id) {
    return this.deleteDocument(this.collectionName, id);
  }
  getBooks() {
    return this.getDocuments(this.collectionName, {});
  }
  deleteAllBooks() {
    return this.connection.collection(this.collectionName).remove({});
  }
  existsBook(id) {
    return this.exists(this.collectionName, id).catch(error =>
      Promise.reject(error)
    );
  }
};

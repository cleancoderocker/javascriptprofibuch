const noopPromise = (reason = { code: 'NOT_IMPLEMENTED' }) =>
  Promise.reject(reason);
  
module.exports = class AbstractBookRepository {
  init() {
    return noopPromise();
  }
  getBooks() {
    return noopPromise();
  }
  saveBook(book) {
    return noopPromise();
  }
  findBook(id) {
    return noopPromise();
  }
  updateBook(book) {
    return noopPromise();
  }
  deleteBook(bookId) {
    return noopPromise();
  }
  deleteAll() {
    return noopPromise();
  }
};

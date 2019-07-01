const books = require('../data/book');

class bookRepository {
    constructor() {}
    getBooks() {
        return books;
    }
    getBookById(id) {
        return books.find(book => book.id === id);
    }
}

module.exports = new bookRepository();
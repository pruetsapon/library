const Book = require('../models/bookModel');

class bookRepository {
    constructor() {}
    getBooks() {
        return Book.find().exec();;
    }
    getBookById(id) {
        return Book.findOne({id: id}).exec();
    }
}

module.exports = new bookRepository();
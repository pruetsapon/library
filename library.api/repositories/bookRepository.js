const Book = require('../models/bookModel');

class bookRepository {

    constructor() {}

    getBooks() {
        return Book.find().exec();
    }

    getBookById(id) {
        return Book.findOne({bookId: id}).exec();
    }

    insertBook(data) {
        let book = new Book(data);
        let error = book.validateSync();
        if (error) {
            let {message} = error;
            return message;
        }
        return book.save();
    }

    updateBook(id, data) {
        let book = new Book(data);
        let error = book.validateSync();
        if (error) {
            let {message} = error;
            return message;
        }
        return Book.findOneAndUpdate({bookId: id}, data).exec();
    }

    deleteBook(id) {
        return Book.deleteOne({bookId: id}).exec();
    }
    
}

module.exports = new bookRepository();
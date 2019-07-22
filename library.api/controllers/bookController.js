const bookRepository = require('../repositories/bookRepository');

const getBooks = async (req, res) => {
    let books = await bookRepository.getBooks();
    res.json(books);
};

const getBookById = async (req, res) => {
    let book = await bookRepository.getBookById(req.params.id);
    res.json(book);
};

const insertBook = async (req, res) => {
    let inserted = await bookRepository.insertBook(req.body);
    res.json(inserted);
}

const updateBook = async (req, res) => {
    let updated = await bookRepository.updateBook(req.params.id, req.body);
    res.json(updated);
}

const deleteBook = async (req, res) => {
    let deleted = await bookRepository.deleteBook(req.params.id);
    res.json(deleted);
}

module.exports = {
    getBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBook
};
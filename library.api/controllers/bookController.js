const bookRepository = require('../repositories/bookRepository');

const getBooks = (req, res) => {
    bookRepository.getBooks().then(books => res.json(books));
};
const getBookById = (req, res) => {
    bookRepository.getBookById(req.params.id).then(book => res.json(book));
};

module.exports = {getBooks, getBookById};
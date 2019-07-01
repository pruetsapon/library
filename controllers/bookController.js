const bookRepository = require('../repositories/bookRepository');

const getBooks = (req, res) => {
    res.json(bookRepository.getBooks());
};
const getBookById = (req, res) => {
    res.json(bookRepository.getBookById(req.params.id));
};

module.exports = {getBooks, getBookById};
const request = require('../helpers/request');

const getBooks = (req, res) => {
    request.get(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
};

const getBookById = (req, res) => {
    request.get(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
};

const insertBook = async (req, res) => {
    request.post(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
}

const updateBook = async (req, res) => {
    request.put(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
}

const deleteBook = async (req, res) => {
    request.del(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
}

module.exports = {
    getBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBook
};
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

module.exports = {getBooks, getBookById};
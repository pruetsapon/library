const request = require('../helpers/request').request;

const getBooks = (req, res) => {
    request(req)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};
const getBookById = (req, res) => {
    request(req)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

module.exports = {getBooks, getBookById};
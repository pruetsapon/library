const request = require('../helpers/request');

const getUsers = (req, res) => {
    request.get(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
};
const getUserById = (req, res) => {
    request.get(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
};

module.exports = {getUsers, getUserById};
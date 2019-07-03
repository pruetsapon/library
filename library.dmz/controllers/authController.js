const request = require('../helpers/request').request;

const authenticate = (req, res) => {
    request(req)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

module.exports = {authenticate};
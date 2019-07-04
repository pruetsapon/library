const request = require('../helpers/request');

const authenticate = (req, res) => {
    request.post(req)
        .then(data => res.json(data))
        .catch(err => res.json(err.error));
};

module.exports = {authenticate};
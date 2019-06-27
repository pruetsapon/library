const auth = require('../models/auth');

const authenticate = (req, res, next) => {
    auth.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
};

module.exports = {authenticate};
const userRepository = require('../repositories/userRepository');

const getUsers = (req, res) => {
    userRepository.getUsers().then(users => res.json(users));
};

const getUserById = (req, res) => {
    userRepository.getUserById(req.params.id).then(user => res.json(user));
};

module.exports = {
    getUsers,
    getUserById
};
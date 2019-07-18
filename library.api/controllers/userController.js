const userRepository = require('../repositories/userRepository');

const getUsers = (req, res) => {
    res.json(userRepository.getUsers());
};
const getUserById = (req, res) => {
    console.log(userRepository.getUserById(req.params.id));
    res.json(userRepository.getUserById(req.params.id));
};

module.exports = {getUsers, getUserById};
const config = require('../config.json');
const jwt = require('jsonwebtoken');
const users = require('../data/user');

const authenticate = async ({ username, password }) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ uid: user.id, fname: user.firstname, lname: user.lastname }, config.secret, { expiresIn: '1h' });
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

module.exports = {authenticate};
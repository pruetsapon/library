const jwt = require('jsonwebtoken');
const config = require('../config.json');
const users = require('../data/user');


const authenticate = async ({ username, password }) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ uid: user.id, fname: user.firstname, lname: user.lastname, role: user.role }, config.secret, { expiresIn: config.expiresIn });
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

module.exports = {authenticate};
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User = require('../models/userModel');


const authenticate = async ({ username, password }) => {
    const user = await User.findOne({username: username, password: password}).exec();
    if (user) {
        const token = jwt.sign({ uid: user.userId, fname: user.firstname, lname: user.lastname, role: user.role }, config.secret, { expiresIn: config.expiresIn });
        let { userId, firstname, lastname } = user;
        return { 
            userId,
            firstname,
            lastname,
            token
        };
    }
}

module.exports = {authenticate};
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User = require('../models/userModel');


const authenticate = async ({ username, password }) => {
    const user = await User.findOne({username: username, password: password}).exec();
    if (user) {
        const token = jwt.sign({ uid: user.id, fname: user.firstname, lname: user.lastname, role: user.role }, config.secret, { expiresIn: config.expiresIn });
        let { id, firstname, lastname } = user;
        return { 
            id,
            firstname,
            lastname,
            token
        };
    }
}

module.exports = {authenticate};